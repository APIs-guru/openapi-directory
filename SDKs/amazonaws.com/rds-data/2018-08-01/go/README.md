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
    
    req := operations.BatchExecuteStatementRequest{
        Headers: operations.BatchExecuteStatementHeaders{
            XAmzAlgorithm: "quia",
            XAmzContentSha256: "nihil",
            XAmzCredential: "voluptas",
            XAmzDate: "quidem",
            XAmzSecurityToken: "quia",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "laboriosam",
        },
        Request: operations.BatchExecuteStatementRequestBody{
            Database: "earum",
            ParameterSets: [][]shared.SQLParameter{
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: "incidunt",
                        TypeHint: "DATE",
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{
                                    
                                    },
                                    shared.ArrayValue{
                                    
                                    },
                                },
                                BooleanValues: []bool{
                                    false,
                                    false,
                                    false,
                                },
                                DoubleValues: []float64{
                                    56.200001,
                                    10.100000,
                                },
                                LongValues: []int64{
                                    7511699282443220301,
                                },
                                StringValues: []string{
                                    "totam",
                                    "excepturi",
                                },
                            },
                            BlobValue: "rerum",
                            BooleanValue: false,
                            DoubleValue: 99.199997,
                            IsNull: true,
                            LongValue: 3007027148256046098,
                            StringValue: "aut",
                        },
                    },
                },
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: "nihil",
                        TypeHint: "DATE",
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{
                                    
                                    },
                                },
                                BooleanValues: []bool{
                                    false,
                                    true,
                                },
                                DoubleValues: []float64{
                                    67.099998,
                                },
                                LongValues: []int64{
                                    2561202617348986139,
                                    434017135132014255,
                                },
                                StringValues: []string{
                                    "qui",
                                    "aut",
                                    "modi",
                                },
                            },
                            BlobValue: "sequi",
                            BooleanValue: true,
                            DoubleValue: 25.200001,
                            IsNull: false,
                            LongValue: 8687064396892358198,
                            StringValue: "molestiae",
                        },
                    },
                },
            },
            ResourceArn: "voluptatem",
            Schema: "autem",
            SecretArn: "sit",
            SQL: "aspernatur",
            TransactionID: "molestias",
        },
    }
    
    res, err := s.Sdk.BatchExecuteStatement(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchExecuteStatementResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchExecuteStatement` - <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <important> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> </important>
* `BeginTransaction` - <p>Starts a SQL transaction.</p> <pre><code> &lt;important&gt; &lt;p&gt;A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.&lt;/p&gt; &lt;p&gt;A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.&lt;/p&gt; &lt;p&gt;DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate &lt;code&gt;ExecuteStatement&lt;/code&gt; call with &lt;code&gt;continueAfterTimeout&lt;/code&gt; enabled.&lt;/p&gt; &lt;/important&gt; </code></pre>
* `CommitTransaction` - Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
* `ExecuteSQL` - <p>Runs one or more SQL statements.</p> <important> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </important>
* `ExecuteStatement` - <p>Runs a SQL statement against a database.</p> <important> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> </important> <p>The response size limit is 1 MB. If the call returns more than 1 MB of response data, the call is terminated.</p>
* `RollbackTransaction` - Performs a rollback of a transaction. Rolling back a transaction cancels its changes.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
