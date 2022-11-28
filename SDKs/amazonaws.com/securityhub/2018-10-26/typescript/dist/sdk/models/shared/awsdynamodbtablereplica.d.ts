import { SpeakeasyBase } from "../../../internal/utils";
import { AwsDynamoDbTableReplicaGlobalSecondaryIndex } from "./awsdynamodbtablereplicaglobalsecondaryindex";
import { AwsDynamoDbTableProvisionedThroughputOverride } from "./awsdynamodbtableprovisionedthroughputoverride";
/**
 * Information about a replica of a DynamoDB table.
**/
export declare class AwsDynamoDbTableReplica extends SpeakeasyBase {
    globalSecondaryIndexes?: AwsDynamoDbTableReplicaGlobalSecondaryIndex[];
    kmsMasterKeyId?: string;
    provisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
    regionName?: string;
    replicaStatus?: string;
    replicaStatusDescription?: string;
}
