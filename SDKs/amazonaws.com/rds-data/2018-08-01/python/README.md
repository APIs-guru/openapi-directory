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
    
req = operations.BatchExecuteStatementRequest(
    headers=operations.BatchExecuteStatementHeaders(
        x_amz_algorithm="quia",
        x_amz_content_sha256="nihil",
        x_amz_credential="voluptas",
        x_amz_date="quidem",
        x_amz_security_token="quia",
        x_amz_signature="voluptas",
        x_amz_signed_headers="laboriosam",
    ),
    request=operations.BatchExecuteStatementRequestBody(
        database="earum",
        parameter_sets=[
            [
                shared.SQLParameter(
                    name="incidunt",
                    type_hint="DATE",
                    value=shared.Field(
                        array_value=shared.ArrayValue(
                            array_values=[
                                shared.ArrayValue(
                                
                                ),
                                shared.ArrayValue(
                                
                                ),
                            ],
                            boolean_values=[
                                False,
                                False,
                                False,
                            ],
                            double_values=[
                                56.200001,
                                10.100000,
                            ],
                            long_values=[
                                7511699282443220301,
                            ],
                            string_values=[
                                "totam",
                                "excepturi",
                            ],
                        ),
                        blob_value="rerum",
                        boolean_value=False,
                        double_value=99.199997,
                        is_null=True,
                        long_value=3007027148256046098,
                        string_value="aut",
                    ),
                ),
            ],
            [
                shared.SQLParameter(
                    name="nihil",
                    type_hint="DATE",
                    value=shared.Field(
                        array_value=shared.ArrayValue(
                            array_values=[
                                shared.ArrayValue(
                                
                                ),
                            ],
                            boolean_values=[
                                False,
                                True,
                            ],
                            double_values=[
                                67.099998,
                            ],
                            long_values=[
                                2561202617348986139,
                                434017135132014255,
                            ],
                            string_values=[
                                "qui",
                                "aut",
                                "modi",
                            ],
                        ),
                        blob_value="sequi",
                        boolean_value=True,
                        double_value=25.200001,
                        is_null=False,
                        long_value=8687064396892358198,
                        string_value="molestiae",
                    ),
                ),
            ],
        ],
        resource_arn="voluptatem",
        schema="autem",
        secret_arn="sit",
        sql="aspernatur",
        transaction_id="molestias",
    ),
)
    
res = s.sdk.batch_execute_statement(req)

if res.batch_execute_statement_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batch_execute_statement` - <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <important> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> </important>
* `begin_transaction` - <p>Starts a SQL transaction.</p> <pre><code> &lt;important&gt; &lt;p&gt;A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.&lt;/p&gt; &lt;p&gt;A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.&lt;/p&gt; &lt;p&gt;DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate &lt;code&gt;ExecuteStatement&lt;/code&gt; call with &lt;code&gt;continueAfterTimeout&lt;/code&gt; enabled.&lt;/p&gt; &lt;/important&gt; </code></pre>
* `commit_transaction` - Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
* `execute_sql` - <p>Runs one or more SQL statements.</p> <important> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </important>
* `execute_statement` - <p>Runs a SQL statement against a database.</p> <important> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> </important> <p>The response size limit is 1 MB. If the call returns more than 1 MB of response data, the call is terminated.</p>
* `rollback_transaction` - Performs a rollback of a transaction. Rolling back a transaction cancels its changes.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
