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
    
    req := operations.DescribeReportCreationRequest{
        Headers: operations.DescribeReportCreationHeaders{
            XAmzAlgorithm: "vitae",
            XAmzContentSha256: "animi",
            XAmzCredential: "eos",
            XAmzDate: "necessitatibus",
            XAmzSecurityToken: "aperiam",
            XAmzSignature: "suscipit",
            XAmzSignedHeaders: "aut",
            XAmzTarget: "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation",
        },
        Request: map[string]interface{}{
            "quibusdam": "non",
        },
    }
    
    res, err := s.Sdk.DescribeReportCreation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReportCreationOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DescribeReportCreation` - <p>Describes the status of the <code>StartReportCreation</code> operation. </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>
* `GetComplianceSummary` - <p>Returns a table that shows counts of resources that are noncompliant with their tag policies.</p> <p>For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>AWS Organizations User Guide.</i> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
* `GetResources` - <p>Returns all the tagged or previously tagged resources that are located in the specified Region for the AWS account.</p> <p>Depending on what information you want returned, you can also specify the following:</p> <ul> <li> <p> <i>Filters</i> that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources.</p> </li> <li> <p>Information about compliance with the account's effective tag policy. For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>AWS Organizations User Guide.</i> </p> </li> </ul> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
* `GetTagKeys` - <p>Returns all tag keys currently in use in the specified Region for the calling AWS account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
* `GetTagValues` - <p>Returns all tag values for the specified key that are used in the specified AWS Region for the calling AWS account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
* `StartReportCreation` - <p>Generates a report that lists all tagged resources in the accounts across your organization and tells whether each resource is compliant with the effective tag policy. Compliance data is refreshed daily. The report is generated asynchronously.</p> <p>The generated report is saved to the following location:</p> <p> <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>
* `TagResources` - <p>Applies one or more tags to the specified resources. Note the following:</p> <ul> <li> <p>Not all resources can have tags. For a list of services with resources that support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>.</p> </li> <li> <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>AWS General Reference.</i> </p> </li> <li> <p>You can only tag resources that are located in the specified AWS Region for the AWS account.</p> </li> <li> <p>To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service.</p> </li> </ul> <important> <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.</p> </important>
* `UntagResources` - <p>Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:</p> <ul> <li> <p>To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see the documentation for the service whose resource you want to untag.</p> </li> <li> <p>You can only tag resources that are located in the specified AWS Region for the calling AWS account.</p> </li> </ul>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
