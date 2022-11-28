import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsDynamoDbTableReplicaGlobalSecondaryIndex } from "./awsdynamodbtablereplicaglobalsecondaryindex";
import { AwsDynamoDbTableProvisionedThroughputOverride } from "./awsdynamodbtableprovisionedthroughputoverride";



// AwsDynamoDbTableReplica
/** 
 * Information about a replica of a DynamoDB table.
**/
export class AwsDynamoDbTableReplica extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexes", elemType: AwsDynamoDbTableReplicaGlobalSecondaryIndex })
  globalSecondaryIndexes?: AwsDynamoDbTableReplicaGlobalSecondaryIndex[];

  @SpeakeasyMetadata({ data: "json, name=KmsMasterKeyId" })
  kmsMasterKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;

  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicaStatus" })
  replicaStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicaStatusDescription" })
  replicaStatusDescription?: string;
}
