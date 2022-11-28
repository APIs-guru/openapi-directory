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
    
    req := operations.BatchDeleteWorldsRequest{
        Headers: operations.BatchDeleteWorldsHeaders{
            XAmzAlgorithm: "totam",
            XAmzContentSha256: "similique",
            XAmzCredential: "sunt",
            XAmzDate: "aut",
            XAmzSecurityToken: "quis",
            XAmzSignature: "quis",
            XAmzSignedHeaders: "amet",
        },
        Request: operations.BatchDeleteWorldsRequestBody{
            Worlds: []string{
                "totam",
                "perspiciatis",
                "cupiditate",
            },
        },
    }
    
    res, err := s.Sdk.BatchDeleteWorlds(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteWorldsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchDeleteWorlds` - Deletes one or more worlds in a batch operation.
* `BatchDescribeSimulationJob` - Describes one or more simulation jobs.
* `CancelDeploymentJob` - Cancels the specified deployment job.
* `CancelSimulationJob` - Cancels the specified simulation job.
* `CancelSimulationJobBatch` - Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. 
* `CancelWorldExportJob` - Cancels the specified export job.
* `CancelWorldGenerationJob` - Cancels the specified world generator job.
* `CreateDeploymentJob` - <p>Deploys a specific version of a robot application to robots in a fleet.</p> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* `CreateFleet` - Creates a fleet, a logical group of robots running the same robot application.
* `CreateRobot` - Creates a robot.
* `CreateRobotApplication` - Creates a robot application. 
* `CreateRobotApplicationVersion` - Creates a version of a robot application.
* `CreateSimulationApplication` - Creates a simulation application.
* `CreateSimulationApplicationVersion` - Creates a simulation application with a specific revision id.
* `CreateSimulationJob` - <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* `CreateWorldExportJob` - Creates a world export job.
* `CreateWorldGenerationJob` - Creates worlds using the specified template.
* `CreateWorldTemplate` - Creates a world template.
* `DeleteFleet` - Deletes a fleet.
* `DeleteRobot` - Deletes a robot.
* `DeleteRobotApplication` - Deletes a robot application.
* `DeleteSimulationApplication` - Deletes a simulation application.
* `DeleteWorldTemplate` - Deletes a world template.
* `DeregisterRobot` - Deregisters a robot.
* `DescribeDeploymentJob` - Describes a deployment job.
* `DescribeFleet` - Describes a fleet.
* `DescribeRobot` - Describes a robot.
* `DescribeRobotApplication` - Describes a robot application.
* `DescribeSimulationApplication` - Describes a simulation application.
* `DescribeSimulationJob` - Describes a simulation job.
* `DescribeSimulationJobBatch` - Describes a simulation job batch.
* `DescribeWorld` - Describes a world.
* `DescribeWorldExportJob` - Describes a world export job.
* `DescribeWorldGenerationJob` - Describes a world generation job.
* `DescribeWorldTemplate` - Describes a world template.
* `GetWorldTemplateBody` - Gets the world template body.
* `ListDeploymentJobs` - Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs. 
* `ListFleets` - Returns a list of fleets. You can optionally provide filters to retrieve specific fleets. 
* `ListRobotApplications` - Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
* `ListRobots` - Returns a list of robots. You can optionally provide filters to retrieve specific robots.
* `ListSimulationApplications` - Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. 
* `ListSimulationJobBatches` - Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. 
* `ListSimulationJobs` - Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. 
* `ListTagsForResource` - Lists all tags on a AWS RoboMaker resource.
* `ListWorldExportJobs` - Lists world export jobs.
* `ListWorldGenerationJobs` - Lists world generator jobs.
* `ListWorldTemplates` - Lists world templates.
* `ListWorlds` - Lists worlds.
* `RegisterRobot` - Registers a robot with a fleet.
* `RestartSimulationJob` - Restarts a running simulation job.
* `StartSimulationJobBatch` - Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. 
* `SyncDeploymentJob` - Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.
* `TagResource` - <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
* `UntagResource` - <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
* `UpdateRobotApplication` - Updates a robot application.
* `UpdateSimulationApplication` - Updates a simulation application.
* `UpdateWorldTemplate` - Updates a world template.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
