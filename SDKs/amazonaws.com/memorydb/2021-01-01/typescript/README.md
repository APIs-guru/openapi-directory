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
import { BatchUpdateClusterRequest, BatchUpdateClusterResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchUpdateClusterRequest = {
  headers: {
    xAmzAlgorithm: "ad",
    xAmzContentSha256: "incidunt",
    xAmzCredential: "dolor",
    xAmzDate: "suscipit",
    xAmzSecurityToken: "officiis",
    xAmzSignature: "cum",
    xAmzSignedHeaders: "totam",
    xAmzTarget: "AmazonMemoryDB.BatchUpdateCluster",
  },
  request: {
    clusterNames: [
      "quos",
    ],
    serviceUpdate: {
      serviceUpdateNameToApply: "beatae",
    },
  },
};

sdk.sdk.batchUpdateCluster(req).then((res: BatchUpdateClusterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchUpdateCluster` - Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.
* `copySnapshot` - Makes a copy of an existing snapshot.
* `createAcl` - Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* `createCluster` - Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.
* `createParameterGroup` - Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/parametergroups.html">Configuring engine parameters using parameter groups</a>. 
* `createSnapshot` - Creates a copy of an entire cluster at a specific moment in time.
* `createSubnetGroup` - Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.
* `createUser` - Creates a MemoryDB user. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* `deleteAcl` - Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* `deleteCluster` - Deletes a cluster. It also deletes all associated nodes and node endpoints
* `deleteParameterGroup` - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters. You cannot delete the default parameter groups in your account.
* `deleteSnapshot` - Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.
* `deleteSubnetGroup` - Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.
* `deleteUser` - Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.
* `describeAcLs` - Returns a list of ACLs
* `describeClusters` - Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.
* `describeEngineVersions` - Returns a list of the available Redis engine versions.
* `describeEvents` - Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
* `describeParameterGroups` - Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.
* `describeParameters` - Returns the detailed parameter list for a particular parameter group.
* `describeServiceUpdates` - Returns details of the service updates
* `describeSnapshots` - Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.
* `describeSubnetGroups` - Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.
* `describeUsers` - Returns a list of users.
* `failoverShard` - Used to failover a shard
* `listAllowedNodeTypeUpdates` - Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.
* `listTags` - Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a> 
* `resetParameterGroup` - Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.
* `tagResource` - <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/iam.resourcelevelpermissions.html">Resource-level permissions</a>.</p> <p>For example, you can use cost-allocation tags to your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>
* `untagResource` - Use this operation to remove tags on a resource
* `updateAcl` - Changes the list of users that belong to the Access Control List.
* `updateCluster` - Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.
* `updateParameterGroup` - Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* `updateSubnetGroup` - Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a> 
* `updateUser` - Changes user password(s) and/or access string.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
