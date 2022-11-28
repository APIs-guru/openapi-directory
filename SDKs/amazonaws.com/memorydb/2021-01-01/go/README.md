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
    
    req := operations.BatchUpdateClusterRequest{
        Headers: operations.BatchUpdateClusterHeaders{
            XAmzAlgorithm: "ad",
            XAmzContentSha256: "incidunt",
            XAmzCredential: "dolor",
            XAmzDate: "suscipit",
            XAmzSecurityToken: "officiis",
            XAmzSignature: "cum",
            XAmzSignedHeaders: "totam",
            XAmzTarget: "AmazonMemoryDB.BatchUpdateCluster",
        },
        Request: shared.BatchUpdateClusterRequest{
            ClusterNames: []string{
                "quos",
            },
            ServiceUpdate: &shared.ServiceUpdateRequest{
                ServiceUpdateNameToApply: "beatae",
            },
        },
    }
    
    res, err := s.Sdk.BatchUpdateCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateClusterResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchUpdateCluster` - Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.
* `CopySnapshot` - Makes a copy of an existing snapshot.
* `CreateACL` - Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* `CreateCluster` - Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.
* `CreateParameterGroup` - Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/parametergroups.html">Configuring engine parameters using parameter groups</a>. 
* `CreateSnapshot` - Creates a copy of an entire cluster at a specific moment in time.
* `CreateSubnetGroup` - Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.
* `CreateUser` - Creates a MemoryDB user. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* `DeleteACL` - Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* `DeleteCluster` - Deletes a cluster. It also deletes all associated nodes and node endpoints
* `DeleteParameterGroup` - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters. You cannot delete the default parameter groups in your account.
* `DeleteSnapshot` - Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.
* `DeleteSubnetGroup` - Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.
* `DeleteUser` - Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.
* `DescribeAcLs` - Returns a list of ACLs
* `DescribeClusters` - Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.
* `DescribeEngineVersions` - Returns a list of the available Redis engine versions.
* `DescribeEvents` - Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
* `DescribeParameterGroups` - Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.
* `DescribeParameters` - Returns the detailed parameter list for a particular parameter group.
* `DescribeServiceUpdates` - Returns details of the service updates
* `DescribeSnapshots` - Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.
* `DescribeSubnetGroups` - Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.
* `DescribeUsers` - Returns a list of users.
* `FailoverShard` - Used to failover a shard
* `ListAllowedNodeTypeUpdates` - Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.
* `ListTags` - Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a> 
* `ResetParameterGroup` - Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.
* `TagResource` - <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/iam.resourcelevelpermissions.html">Resource-level permissions</a>.</p> <p>For example, you can use cost-allocation tags to your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>
* `UntagResource` - Use this operation to remove tags on a resource
* `UpdateACL` - Changes the list of users that belong to the Access Control List.
* `UpdateCluster` - Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.
* `UpdateParameterGroup` - Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* `UpdateSubnetGroup` - Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a> 
* `UpdateUser` - Changes user password(s) and/or access string.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
