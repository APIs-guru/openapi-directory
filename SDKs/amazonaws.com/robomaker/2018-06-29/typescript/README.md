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
import { BatchDeleteWorldsRequest, BatchDeleteWorldsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchDeleteWorldsRequest = {
  headers: {
    xAmzAlgorithm: "totam",
    xAmzContentSha256: "similique",
    xAmzCredential: "sunt",
    xAmzDate: "aut",
    xAmzSecurityToken: "quis",
    xAmzSignature: "quis",
    xAmzSignedHeaders: "amet",
  },
  request: {
    worlds: [
      "totam",
      "perspiciatis",
      "cupiditate",
    ],
  },
};

sdk.sdk.batchDeleteWorlds(req).then((res: BatchDeleteWorldsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchDeleteWorlds` - Deletes one or more worlds in a batch operation.
* `batchDescribeSimulationJob` - Describes one or more simulation jobs.
* `cancelDeploymentJob` - Cancels the specified deployment job.
* `cancelSimulationJob` - Cancels the specified simulation job.
* `cancelSimulationJobBatch` - Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. 
* `cancelWorldExportJob` - Cancels the specified export job.
* `cancelWorldGenerationJob` - Cancels the specified world generator job.
* `createDeploymentJob` - <p>Deploys a specific version of a robot application to robots in a fleet.</p> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* `createFleet` - Creates a fleet, a logical group of robots running the same robot application.
* `createRobot` - Creates a robot.
* `createRobotApplication` - Creates a robot application. 
* `createRobotApplicationVersion` - Creates a version of a robot application.
* `createSimulationApplication` - Creates a simulation application.
* `createSimulationApplicationVersion` - Creates a simulation application with a specific revision id.
* `createSimulationJob` - <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* `createWorldExportJob` - Creates a world export job.
* `createWorldGenerationJob` - Creates worlds using the specified template.
* `createWorldTemplate` - Creates a world template.
* `deleteFleet` - Deletes a fleet.
* `deleteRobot` - Deletes a robot.
* `deleteRobotApplication` - Deletes a robot application.
* `deleteSimulationApplication` - Deletes a simulation application.
* `deleteWorldTemplate` - Deletes a world template.
* `deregisterRobot` - Deregisters a robot.
* `describeDeploymentJob` - Describes a deployment job.
* `describeFleet` - Describes a fleet.
* `describeRobot` - Describes a robot.
* `describeRobotApplication` - Describes a robot application.
* `describeSimulationApplication` - Describes a simulation application.
* `describeSimulationJob` - Describes a simulation job.
* `describeSimulationJobBatch` - Describes a simulation job batch.
* `describeWorld` - Describes a world.
* `describeWorldExportJob` - Describes a world export job.
* `describeWorldGenerationJob` - Describes a world generation job.
* `describeWorldTemplate` - Describes a world template.
* `getWorldTemplateBody` - Gets the world template body.
* `listDeploymentJobs` - Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs. 
* `listFleets` - Returns a list of fleets. You can optionally provide filters to retrieve specific fleets. 
* `listRobotApplications` - Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
* `listRobots` - Returns a list of robots. You can optionally provide filters to retrieve specific robots.
* `listSimulationApplications` - Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. 
* `listSimulationJobBatches` - Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. 
* `listSimulationJobs` - Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. 
* `listTagsForResource` - Lists all tags on a AWS RoboMaker resource.
* `listWorldExportJobs` - Lists world export jobs.
* `listWorldGenerationJobs` - Lists world generator jobs.
* `listWorldTemplates` - Lists world templates.
* `listWorlds` - Lists worlds.
* `registerRobot` - Registers a robot with a fleet.
* `restartSimulationJob` - Restarts a running simulation job.
* `startSimulationJobBatch` - Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. 
* `syncDeploymentJob` - Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.
* `tagResource` - <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
* `untagResource` - <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
* `updateRobotApplication` - Updates a robot application.
* `updateSimulationApplication` - Updates a simulation application.
* `updateWorldTemplate` - Updates a world template.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
