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
    
req = operations.ChangeServerLifeCycleStateRequest(
    headers=operations.ChangeServerLifeCycleStateHeaders(
        x_amz_algorithm="molestiae",
        x_amz_content_sha256="id",
        x_amz_credential="quia",
        x_amz_date="dolor",
        x_amz_security_token="sit",
        x_amz_signature="non",
        x_amz_signed_headers="sed",
    ),
    request=operations.ChangeServerLifeCycleStateRequestBody(
        life_cycle=operations.ChangeServerLifeCycleStateRequestBodyLifeCycle(
            state="READY_FOR_CUTOVER",
        ),
        source_server_id="architecto",
    ),
)
    
res = s.sdk.change_server_life_cycle_state(req)

if res.source_server is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `change_server_life_cycle_state` - Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
* `create_replication_configuration_template` - Creates a new ReplicationConfigurationTemplate.
* `delete_job` - Deletes a single Job by ID.
* `delete_replication_configuration_template` - Deletes a single Replication Configuration Template by ID
* `delete_source_server` - Deletes a single source server by ID.
* `describe_job_log_items` - Retrieves detailed Job log with paging.
* `describe_jobs` - Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normaly created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* `describe_replication_configuration_templates` - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* `describe_source_servers` - Retrieves all SourceServers or multiple SourceServers by ID.
* `disconnect_from_service` - Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communciating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.
* `finalize_cutover` - Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.
* `get_launch_configuration` - Lists all LaunchConfigurations available, filtered by Source Server IDs.
* `get_replication_configuration` - Lists all ReplicationConfigurations, filtered by Source Server ID.
* `initialize_service` - Initialize Application Migration Service.
* `list_tags_for_resource` - List all tags for your Application Migration Service resources.
* `mark_as_archived` - Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle.state which equals DISCONNECTED or CUTOVER.
* `retry_data_replication` - Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
* `start_cutover` - Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
* `start_test` - Lauches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
* `tag_resource` - Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* `terminate_target_instances` - Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
* `untag_resource` - Deletes the specified set of tags from the specified set of Application Migration Service resources.
* `update_launch_configuration` - Updates multiple LaunchConfigurations by Source Server ID.
* `update_replication_configuration` - Allows you to update multiple ReplicationConfigurations by Source Server ID.
* `update_replication_configuration_template` - Updates multiple ReplicationConfigurationTemplates by ID.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
