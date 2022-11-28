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
    
    req := operations.ChangeServerLifeCycleStateRequest{
        Headers: operations.ChangeServerLifeCycleStateHeaders{
            XAmzAlgorithm: "molestiae",
            XAmzContentSha256: "id",
            XAmzCredential: "quia",
            XAmzDate: "dolor",
            XAmzSecurityToken: "sit",
            XAmzSignature: "non",
            XAmzSignedHeaders: "sed",
        },
        Request: operations.ChangeServerLifeCycleStateRequestBody{
            LifeCycle: operations.ChangeServerLifeCycleStateRequestBodyLifeCycle{
                State: "READY_FOR_CUTOVER",
            },
            SourceServerID: "architecto",
        },
    }
    
    res, err := s.Sdk.ChangeServerLifeCycleState(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceServer != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `ChangeServerLifeCycleState` - Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
* `CreateReplicationConfigurationTemplate` - Creates a new ReplicationConfigurationTemplate.
* `DeleteJob` - Deletes a single Job by ID.
* `DeleteReplicationConfigurationTemplate` - Deletes a single Replication Configuration Template by ID
* `DeleteSourceServer` - Deletes a single source server by ID.
* `DescribeJobLogItems` - Retrieves detailed Job log with paging.
* `DescribeJobs` - Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normaly created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* `DescribeReplicationConfigurationTemplates` - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* `DescribeSourceServers` - Retrieves all SourceServers or multiple SourceServers by ID.
* `DisconnectFromService` - Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communciating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.
* `FinalizeCutover` - Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.
* `GetLaunchConfiguration` - Lists all LaunchConfigurations available, filtered by Source Server IDs.
* `GetReplicationConfiguration` - Lists all ReplicationConfigurations, filtered by Source Server ID.
* `InitializeService` - Initialize Application Migration Service.
* `ListTagsForResource` - List all tags for your Application Migration Service resources.
* `MarkAsArchived` - Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle.state which equals DISCONNECTED or CUTOVER.
* `RetryDataReplication` - Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
* `StartCutover` - Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
* `StartTest` - Lauches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
* `TagResource` - Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* `TerminateTargetInstances` - Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
* `UntagResource` - Deletes the specified set of tags from the specified set of Application Migration Service resources.
* `UpdateLaunchConfiguration` - Updates multiple LaunchConfigurations by Source Server ID.
* `UpdateReplicationConfiguration` - Allows you to update multiple ReplicationConfigurations by Source Server ID.
* `UpdateReplicationConfigurationTemplate` - Updates multiple ReplicationConfigurationTemplates by ID.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
