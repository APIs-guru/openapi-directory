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
import { CreateAppRequest, CreateAppResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateAppRequest = {
  headers: {
    xAmzAlgorithm: "id",
    xAmzContentSha256: "in",
    xAmzCredential: "doloribus",
    xAmzDate: "facilis",
    xAmzSecurityToken: "occaecati",
    xAmzSignature: "iste",
    xAmzSignedHeaders: "asperiores",
    xAmzTarget: "AWSServerMigrationService_V2016_10_24.CreateApp",
  },
  request: {
    clientToken: "tenetur",
    description: "mollitia",
    name: "veniam",
    roleName: "eum",
    serverGroups: [
      {
        name: "et",
        serverGroupId: "consequatur",
        serverList: [
          {
            replicationJobId: "quod",
            replicationJobTerminated: true,
            serverId: "dignissimos",
            serverType: "VIRTUAL_MACHINE",
            vmServer: {
              vmManagerName: "saepe",
              vmManagerType: "VSPHERE",
              vmName: "ea",
              vmPath: "corrupti",
              vmServerAddress: {
                vmId: "dolor",
                vmManagerId: "itaque",
              },
            },
          },
          {
            replicationJobId: "rem",
            replicationJobTerminated: false,
            serverId: "sint",
            serverType: "VIRTUAL_MACHINE",
            vmServer: {
              vmManagerName: "adipisci",
              vmManagerType: "HYPERV-MANAGER",
              vmName: "et",
              vmPath: "expedita",
              vmServerAddress: {
                vmId: "doloribus",
                vmManagerId: "iste",
              },
            },
          },
        ],
      },
    ],
    tags: [
      {
        key: "doloremque",
        value: "placeat",
      },
    ],
  },
};

sdk.sdk.createApp(req).then((res: CreateAppResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createApp` - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
* `createReplicationJob` - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to AWS. Each replication run creates an Amazon Machine Image (AMI).
* `deleteApp` - Deletes the specified application. Optionally deletes the launched stack associated with the application and all AWS SMS replication jobs for servers in the application.
* `deleteAppLaunchConfiguration` - Deletes the launch configuration for the specified application.
* `deleteAppReplicationConfiguration` - Deletes the replication configuration for the specified application.
* `deleteAppValidationConfiguration` - Deletes the validation configuration for the specified application.
* `deleteReplicationJob` - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. AWS deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created by the replication runs are not deleted.</p>
* `deleteServerCatalog` - Deletes all servers from your server catalog.
* `disassociateConnector` - <p>Disassociates the specified connector from AWS SMS.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
* `generateChangeSet` - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `generateTemplate` - Generates an AWS CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `getApp` - Retrieve information about the specified application.
* `getAppLaunchConfiguration` - Retrieves the application launch configuration associated with the specified application.
* `getAppReplicationConfiguration` - Retrieves the application replication configuration associated with the specified application.
* `getAppValidationConfiguration` - Retrieves information about a configuration for validating an application.
* `getAppValidationOutput` - Retrieves output from validating an application.
* `getConnectors` - Describes the connectors registered with the AWS SMS.
* `getReplicationJobs` - Describes the specified replication job or all of your replication jobs.
* `getReplicationRuns` - Describes the replication runs for the specified replication job.
* `getServers` - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
* `importAppCatalog` - Allows application import from AWS Migration Hub.
* `importServerCatalog` - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
* `launchApp` - Launches the specified application as a stack in AWS CloudFormation.
* `listApps` - Retrieves summaries for all applications.
* `notifyAppValidationOutput` - Provides information to AWS SMS about whether application validation is successful.
* `putAppLaunchConfiguration` - Creates or updates the launch configuration for the specified application.
* `putAppReplicationConfiguration` - Creates or updates the replication configuration for the specified application.
* `putAppValidationConfiguration` - Creates or updates a validation configuration for the specified application.
* `startAppReplication` - Starts replicating the specified application by creating replication jobs for each server in the application.
* `startOnDemandAppReplication` - Starts an on-demand replication run for the specified application.
* `startOnDemandReplicationRun` - <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
* `stopAppReplication` - Stops replicating the specified application by deleting the replication job for each server in the application.
* `terminateApp` - Terminates the stack for the specified application.
* `updateApp` - Updates the specified application.
* `updateReplicationJob` - Updates the specified settings for the specified replication job.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
