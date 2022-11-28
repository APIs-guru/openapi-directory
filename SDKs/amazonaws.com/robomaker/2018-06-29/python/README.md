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
    
req = operations.BatchDeleteWorldsRequest(
    headers=operations.BatchDeleteWorldsHeaders(
        x_amz_algorithm="totam",
        x_amz_content_sha256="similique",
        x_amz_credential="sunt",
        x_amz_date="aut",
        x_amz_security_token="quis",
        x_amz_signature="quis",
        x_amz_signed_headers="amet",
    ),
    request=operations.BatchDeleteWorldsRequestBody(
        worlds=[
            "totam",
            "perspiciatis",
            "cupiditate",
        ],
    ),
)
    
res = s.sdk.batch_delete_worlds(req)

if res.batch_delete_worlds_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batch_delete_worlds` - Deletes one or more worlds in a batch operation.
* `batch_describe_simulation_job` - Describes one or more simulation jobs.
* `cancel_deployment_job` - Cancels the specified deployment job.
* `cancel_simulation_job` - Cancels the specified simulation job.
* `cancel_simulation_job_batch` - Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. 
* `cancel_world_export_job` - Cancels the specified export job.
* `cancel_world_generation_job` - Cancels the specified world generator job.
* `create_deployment_job` - <p>Deploys a specific version of a robot application to robots in a fleet.</p> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* `create_fleet` - Creates a fleet, a logical group of robots running the same robot application.
* `create_robot` - Creates a robot.
* `create_robot_application` - Creates a robot application. 
* `create_robot_application_version` - Creates a version of a robot application.
* `create_simulation_application` - Creates a simulation application.
* `create_simulation_application_version` - Creates a simulation application with a specific revision id.
* `create_simulation_job` - <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* `create_world_export_job` - Creates a world export job.
* `create_world_generation_job` - Creates worlds using the specified template.
* `create_world_template` - Creates a world template.
* `delete_fleet` - Deletes a fleet.
* `delete_robot` - Deletes a robot.
* `delete_robot_application` - Deletes a robot application.
* `delete_simulation_application` - Deletes a simulation application.
* `delete_world_template` - Deletes a world template.
* `deregister_robot` - Deregisters a robot.
* `describe_deployment_job` - Describes a deployment job.
* `describe_fleet` - Describes a fleet.
* `describe_robot` - Describes a robot.
* `describe_robot_application` - Describes a robot application.
* `describe_simulation_application` - Describes a simulation application.
* `describe_simulation_job` - Describes a simulation job.
* `describe_simulation_job_batch` - Describes a simulation job batch.
* `describe_world` - Describes a world.
* `describe_world_export_job` - Describes a world export job.
* `describe_world_generation_job` - Describes a world generation job.
* `describe_world_template` - Describes a world template.
* `get_world_template_body` - Gets the world template body.
* `list_deployment_jobs` - Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs. 
* `list_fleets` - Returns a list of fleets. You can optionally provide filters to retrieve specific fleets. 
* `list_robot_applications` - Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
* `list_robots` - Returns a list of robots. You can optionally provide filters to retrieve specific robots.
* `list_simulation_applications` - Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. 
* `list_simulation_job_batches` - Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. 
* `list_simulation_jobs` - Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. 
* `list_tags_for_resource` - Lists all tags on a AWS RoboMaker resource.
* `list_world_export_jobs` - Lists world export jobs.
* `list_world_generation_jobs` - Lists world generator jobs.
* `list_world_templates` - Lists world templates.
* `list_worlds` - Lists worlds.
* `register_robot` - Registers a robot with a fleet.
* `restart_simulation_job` - Restarts a running simulation job.
* `start_simulation_job_batch` - Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. 
* `sync_deployment_job` - Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.
* `tag_resource` - <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
* `untag_resource` - <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
* `update_robot_application` - Updates a robot application.
* `update_simulation_application` - Updates a simulation application.
* `update_world_template` - Updates a world template.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
