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
    
    req := operations.CreateDatabaseRequest{
        Headers: operations.CreateDatabaseHeaders{
            XAmzAlgorithm: "saepe",
            XAmzContentSha256: "dignissimos",
            XAmzCredential: "laboriosam",
            XAmzDate: "enim",
            XAmzSecurityToken: "natus",
            XAmzSignature: "nesciunt",
            XAmzSignedHeaders: "reiciendis",
            XAmzTarget: "Timestream_20181101.CreateDatabase",
        },
        Request: shared.CreateDatabaseRequest{
            DatabaseName: "sit",
            KmsKeyID: "explicabo",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quisquam",
                    Value: "sapiente",
                },
                shared.Tag{
                    Key: "maxime",
                    Value: "porro",
                },
            },
        },
    }
    
    res, err := s.Sdk.CreateDatabase(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatabaseResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateDatabase` - Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. Refer to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">AWS managed KMS keys</a> for more info. Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide. 
* `CreateTable` - The CreateTable operation adds a new table to an existing database in your account. In an AWS account, table names must be at least unique within each Region if they are in the same database. You may have identical table names in the same Region if the tables are in seperate databases. While creating the table, you must specify the table name, database name, and the retention properties. Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide. 
* `DeleteDatabase` - <p>Deletes a given Timestream database. <i>This is an irreversible operation. After a database is deleted, the time series data from its tables cannot be recovered.</i> </p> <p>All tables in the database must be deleted first, or a ValidationException error will be thrown. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
* `DeleteTable` - <p>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time series data stored in the table cannot be recovered. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
* `DescribeDatabase` - Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
* `DescribeEndpoints` - <p>DescribeEndpoints returns a list of available endpoints to make Timestream API calls against. This API is available through both Write and Query.</p> <p>Because Timestream’s SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>it is not recommended that you use this API unless</i>:</p> <ul> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how to use DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using-API.endpoint-discovery.html">The Endpoint Discovery Pattern and REST APIs</a>.</p>
* `DescribeTable` - Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide. 
* `ListDatabases` - Returns a list of your Timestream databases. Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide. 
* `ListTables` - A list of tables, along with the name, status and retention properties of each table. 
* `ListTagsForResource` -  List all tags on a Timestream resource. 
* `TagResource` -  Associate a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 
* `UntagResource` -  Removes the association of tags from a Timestream resource. 
* `UpdateDatabase` -  Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>). If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins. 
* `UpdateTable` - <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p> <p>Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.</p>
* `WriteRecords` - The WriteRecords operation enables you to write your time series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you with a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. Timestream support eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
