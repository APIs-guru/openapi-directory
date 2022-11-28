# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateDatabaseRequest(
    headers=operations.CreateDatabaseHeaders(
        x_amz_algorithm="saepe",
        x_amz_content_sha256="dignissimos",
        x_amz_credential="laboriosam",
        x_amz_date="enim",
        x_amz_security_token="natus",
        x_amz_signature="nesciunt",
        x_amz_signed_headers="reiciendis",
        x_amz_target="Timestream_20181101.CreateDatabase",
    ),
    request=shared.CreateDatabaseRequest(
        database_name="sit",
        kms_key_id="explicabo",
        tags=[
            shared.Tag(
                key="quisquam",
                value="sapiente",
            ),
            shared.Tag(
                key="maxime",
                value="porro",
            ),
        ],
    ),
)
    
res = s.sdk.create_database(req)

if res.create_database_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_database` - Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. Refer to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">AWS managed KMS keys</a> for more info. Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide. 
* `create_table` - The CreateTable operation adds a new table to an existing database in your account. In an AWS account, table names must be at least unique within each Region if they are in the same database. You may have identical table names in the same Region if the tables are in seperate databases. While creating the table, you must specify the table name, database name, and the retention properties. Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide. 
* `delete_database` - <p>Deletes a given Timestream database. <i>This is an irreversible operation. After a database is deleted, the time series data from its tables cannot be recovered.</i> </p> <p>All tables in the database must be deleted first, or a ValidationException error will be thrown. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
* `delete_table` - <p>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time series data stored in the table cannot be recovered. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
* `describe_database` - Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
* `describe_endpoints` - <p>DescribeEndpoints returns a list of available endpoints to make Timestream API calls against. This API is available through both Write and Query.</p> <p>Because Timestream’s SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>it is not recommended that you use this API unless</i>:</p> <ul> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how to use DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using-API.endpoint-discovery.html">The Endpoint Discovery Pattern and REST APIs</a>.</p>
* `describe_table` - Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide. 
* `list_databases` - Returns a list of your Timestream databases. Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide. 
* `list_tables` - A list of tables, along with the name, status and retention properties of each table. 
* `list_tags_for_resource` -  List all tags on a Timestream resource. 
* `tag_resource` -  Associate a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 
* `untag_resource` -  Removes the association of tags from a Timestream resource. 
* `update_database` -  Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>). If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins. 
* `update_table` - <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p> <p>Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.</p>
* `write_records` - The WriteRecords operation enables you to write your time series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you with a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. Timestream support eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
