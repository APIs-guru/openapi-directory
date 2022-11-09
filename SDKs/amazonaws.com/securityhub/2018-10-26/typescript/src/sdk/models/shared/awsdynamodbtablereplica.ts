import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsDynamoDbTableReplicaGlobalSecondaryIndex } from "./awsdynamodbtablereplicaglobalsecondaryindex";
import { AwsDynamoDbTableProvisionedThroughputOverride } from "./awsdynamodbtableprovisionedthroughputoverride";


// AwsDynamoDbTableReplica
/** 
 * Information about a replica of a DynamoDB table.
**/
export class AwsDynamoDbTableReplica extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalSecondaryIndexes", elemType: shared.AwsDynamoDbTableReplicaGlobalSecondaryIndex })
  globalSecondaryIndexes?: AwsDynamoDbTableReplicaGlobalSecondaryIndex[];

  @Metadata({ data: "json, name=KmsMasterKeyId" })
  kmsMasterKeyId?: string;

  @Metadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;

  @Metadata({ data: "json, name=RegionName" })
  regionName?: string;

  @Metadata({ data: "json, name=ReplicaStatus" })
  replicaStatus?: string;

  @Metadata({ data: "json, name=ReplicaStatusDescription" })
  replicaStatusDescription?: string;
}
