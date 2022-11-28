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
import { BatchMeterUsageRequest, BatchMeterUsageResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchMeterUsageRequest = {
  headers: {
    xAmzAlgorithm: "aut",
    xAmzContentSha256: "dolor",
    xAmzCredential: "veritatis",
    xAmzDate: "dicta",
    xAmzSecurityToken: "consequatur",
    xAmzSignature: "mollitia",
    xAmzSignedHeaders: "distinctio",
    xAmzTarget: "AWSMPMeteringService.BatchMeterUsage",
  },
  request: {
    productCode: "dolor",
    usageRecords: [
      {
        customerIdentifier: "veniam",
        dimension: "ullam",
        quantity: 7143517679490005021,
        timestamp: "1986-11-05T11:19:37Z",
        usageAllocations: [
          {
            allocatedUsageQuantity: 5086685836834963172,
            tags: [
              {
                key: "nisi",
                value: "consequatur",
              },
              {
                key: "fugiat",
                value: "tenetur",
              },
            ],
          },
          {
            allocatedUsageQuantity: 8093916486147727286,
            tags: [
              {
                key: "aspernatur",
                value: "dignissimos",
              },
            ],
          },
          {
            allocatedUsageQuantity: 7014153113816809001,
            tags: [
              {
                key: "saepe",
                value: "voluptas",
              },
              {
                key: "sunt",
                value: "optio",
              },
            ],
          },
        ],
      },
      {
        customerIdentifier: "omnis",
        dimension: "ut",
        quantity: 8667532264838713382,
        timestamp: "2022-10-20T08:06:54Z",
        usageAllocations: [
          {
            allocatedUsageQuantity: 1128063950629246547,
            tags: [
              {
                key: "voluptatum",
                value: "alias",
              },
              {
                key: "consequatur",
                value: "eum",
              },
              {
                key: "nemo",
                value: "omnis",
              },
            ],
          },
          {
            allocatedUsageQuantity: 730903235187604438,
            tags: [
              {
                key: "omnis",
                value: "velit",
              },
            ],
          },
        ],
      },
    ],
  },
};

sdk.sdk.batchMeterUsage(req).then((res: BatchMeterUsageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchMeterUsage` - <p>BatchMeterUsage is called from a SaaS application listed on the AWS Marketplace to post metering records for a set of customers.</p> <p>For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records.</p> <p>Every request to BatchMeterUsage is for one product. If you need to meter usage for multiple products, you must make multiple calls to BatchMeterUsage.</p> <p>BatchMeterUsage can process up to 25 UsageRecords at a time.</p> <p>A UsageRecord can optionally include multiple usage allocations, to provide customers with usagedata split into buckets by tags that you define (or allow the customer to define).</p> <p>BatchMeterUsage requests must be less than 1MB in size.</p>
* `meterUsage` - <p>API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID.</p> <p>MeterUsage is authenticated on the buyer's AWS account using credentials from the EC2 instance, ECS task, or EKS pod.</p> <p>MeterUsage can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p>
* `registerUsage` - <p>Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the RegisterUsage operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call RegisterUsage, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of RegisterUsage. RegisterUsage performs two primary functions: metering and entitlement.</p> <ul> <li> <p> <i>Entitlement</i>: RegisterUsage allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with RegisterUsage is only required to guard against unauthorized use at container startup, as such a CustomerNotSubscribedException/PlatformNotSupportedException will only be thrown on the initial call to RegisterUsage. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a CustomerNotSubscribedException, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running.</p> </li> <li> <p> <i>Metering</i>: RegisterUsage meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for software use is automatically handled by the AWS Marketplace Metering Control Plane -- your software is not required to perform any metering specific actions, other than call RegisterUsage once for metering of software use to commence. The AWS Marketplace Metering Control Plane will also continue to bill customers for running ECS tasks and Amazon EKS pods, regardless of the customers subscription state, removing the need for your software to perform entitlement checks at runtime.</p> </li> </ul>
* `resolveCustomer` - ResolveCustomer is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a CustomerIdentifier and product code.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
