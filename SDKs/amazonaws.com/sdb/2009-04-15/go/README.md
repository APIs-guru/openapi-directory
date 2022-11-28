# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetCreateDomainRequest{
        QueryParams: operations.GetCreateDomainQueryParams{
            AwsAccessKeyID: "quia",
            Action: "CreateDomain",
            DomainName: "id",
            Signature: "dolorem",
            SignatureMethod: "et",
            SignatureVersion: "quibusdam",
            Timestamp: "cupiditate",
            Version: "2009-04-15",
        },
    }
    
    res, err := s.Sdk.GetCreateDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `GetCreateDomain` - <p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>
* `GetDeleteDomain` - <p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>
* `GetDomainMetadata` -  Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 
* `GetGetAttributes` - <p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>
* `GetListDomains` -  The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. 
* `GetSelect` - <p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>
* `PostBatchDeleteAttributes` - <p> Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput. </p> <note> <p> If you specify BatchDeleteAttributes without attributes or values, all the attributes for the item are deleted. </p> <p> BatchDeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute doesn't result in an error. </p> <p> The BatchDeleteAttributes operation succeeds or fails in its entirety. There are no partial deletes. You can execute multiple BatchDeleteAttributes operations and other operations in parallel. However, large numbers of concurrent BatchDeleteAttributes calls can result in Service Unavailable (503) responses. </p> <p> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. </p> <p> This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists. </p> </note> <p> The following limitations are enforced for this operation: <ul> <li>1 MB request size</li> <li>25 item limit per BatchDeleteAttributes operation</li> </ul> </p>
* `PostBatchPutAttributes` - <p> The <code>BatchPutAttributes</code> operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple <a>PutAttribute</a> operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput. </p> <p> The client may specify the item name with the <code>Item.X.ItemName</code> parameter. The client may specify new attributes using a combination of the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> parameters. The client may specify the first attribute for the first item using the parameters <code>Item.0.Attribute.0.Name</code> and <code>Item.0.Attribute.0.Value</code>, and for the second attribute for the first item by the parameters <code>Item.0.Attribute.1.Name</code> and <code>Item.0.Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", "second_value" }</code>. However, it cannot have two attribute instances where both the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> are the same. </p> <p> Optionally, the requester can supply the <code>Replace</code> parameter for each individual value. Setting this value to <code>true</code> will cause the new attribute values to replace the existing attribute values. For example, if an item <code>I</code> has the attributes <code>{ 'a', '1' }, { 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requester does a BatchPutAttributes of <code>{'I', 'b', '4' }</code> with the Replace parameter set to true, the final attributes of the item will be <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, replacing the previous values of the 'b' attribute with the new value. </p> <note> You cannot specify an empty string as an item or as an attribute name. The <code>BatchPutAttributes</code> operation succeeds or fails in its entirety. There are no partial puts. </note> <important> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using <code>Expected.X.Name</code>, <code>Expected.X.Value</code>, or <code>Expected.X.Exists</code>. </important> <p> You can execute multiple <code>BatchPutAttributes</code> operations and other operations in parallel. However, large numbers of concurrent <code>BatchPutAttributes</code> calls can result in Service Unavailable (503) responses. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 attribute name-value pairs per item</li> <li>1 MB request size</li> <li>1 billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> <li>25 item limit per <code>BatchPutAttributes</code> operation</li> </ul> </p>
* `PostCreateDomain` - <p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>
* `PostDeleteAttributes` - <p> Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted. </p> <note> If <code>DeleteAttributes</code> is called without being passed any attributes or values specified, all the attributes for the item are deleted. </note> <p> <code>DeleteAttributes</code> is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. </p> <p> Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <code>DeleteAttributes</code> or <a>PutAttributes</a> operation (write) might not return updated item data. </p>
* `PostDeleteDomain` - <p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>
* `PostDomainMetadata` -  Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 
* `PostGetAttributes` - <p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>
* `PostListDomains` -  The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. 
* `PostPutAttributes` - <p> The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> parameters. The client specifies the first attribute by the parameters <code>Attribute.0.Name</code> and <code>Attribute.0.Value</code>, the second attribute by the parameters <code>Attribute.1.Name</code> and <code>Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", second_value" }</code>. However, it cannot have two attribute instances where both the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> are the same. </p> <p> Optionally, the requestor can supply the <code>Replace</code> parameter for each individual attribute. Setting this value to <code>true</code> causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes <code>{ 'a', '1' }</code>, <code>{ 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requestor calls <code>PutAttributes</code> using the attributes <code>{ 'b', '4' }</code> with the <code>Replace</code> parameter set to true, the final attributes of the item are changed to <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, which replaces the previous values of the 'b' attribute with the new value. </p> <note> Using <code>PutAttributes</code> to replace attribute values that do not exist will not result in an error response. </note> <p> You cannot specify an empty string as an attribute name. </p> <p> Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <a>PutAttributes</a> or <a>DeleteAttributes</a> operation (write) might not return the updated data. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 total attribute name-value pairs per item</li> <li>One billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> </ul> </p>
* `PostSelect` - <p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
