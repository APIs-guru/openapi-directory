# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { BatchExecuteStatementRequest, BatchExecuteStatementResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchExecuteStatementRequest = {
  headers: {
    xAmzAlgorithm: "quia",
    xAmzContentSha256: "nihil",
    xAmzCredential: "voluptas",
    xAmzDate: "quidem",
    xAmzSecurityToken: "quia",
    xAmzSignature: "voluptas",
    xAmzSignedHeaders: "laboriosam",
  },
  request: {
    database: "earum",
    parameterSets: [
      [
        {
          name: "incidunt",
          typeHint: "DATE",
          value: {
            arrayValue: {
              arrayValues: [
                {
                
                },
                {
                
                },
              ],
              booleanValues: [
                false,
                false,
                false,
              ],
              doubleValues: [
                56.200001,
                10.100000,
              ],
              longValues: [
                7511699282443220301,
              ],
              stringValues: [
                "totam",
                "excepturi",
              ],
            },
            blobValue: "rerum",
            booleanValue: false,
            doubleValue: 99.199997,
            isNull: true,
            longValue: 3007027148256046098,
            stringValue: "aut",
          },
        },
      ],
      [
        {
          name: "nihil",
          typeHint: "DATE",
          value: {
            arrayValue: {
              arrayValues: [
                {
                
                },
              ],
              booleanValues: [
                false,
                true,
              ],
              doubleValues: [
                67.099998,
              ],
              longValues: [
                2561202617348986139,
                434017135132014255,
              ],
              stringValues: [
                "qui",
                "aut",
                "modi",
              ],
            },
            blobValue: "sequi",
            booleanValue: true,
            doubleValue: 25.200001,
            isNull: false,
            longValue: 8687064396892358198,
            stringValue: "molestiae",
          },
        },
      ],
    ],
    resourceArn: "voluptatem",
    schema: "autem",
    secretArn: "sit",
    sql: "aspernatur",
    transactionId: "molestias",
  },
};

sdk.sdk.batchExecuteStatement(req).then((res: BatchExecuteStatementResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchExecuteStatement` - <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <important> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> </important>
* `beginTransaction` - <p>Starts a SQL transaction.</p> <pre><code> &lt;important&gt; &lt;p&gt;A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.&lt;/p&gt; &lt;p&gt;A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.&lt;/p&gt; &lt;p&gt;DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate &lt;code&gt;ExecuteStatement&lt;/code&gt; call with &lt;code&gt;continueAfterTimeout&lt;/code&gt; enabled.&lt;/p&gt; &lt;/important&gt; </code></pre>
* `commitTransaction` - Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
* `executeSql` - <p>Runs one or more SQL statements.</p> <important> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </important>
* `executeStatement` - <p>Runs a SQL statement against a database.</p> <important> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> </important> <p>The response size limit is 1 MB. If the call returns more than 1 MB of response data, the call is terminated.</p>
* `rollbackTransaction` - Performs a rollback of a transaction. Rolling back a transaction cancels its changes.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
