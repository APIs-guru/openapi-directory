import { SpeakeasyBase } from "../../../internal/utils";
import { AwsDynamoDbTableProvisionedThroughputOverride } from "./awsdynamodbtableprovisionedthroughputoverride";
/**
 * Information about a global secondary index for a DynamoDB table replica.
**/
export declare class AwsDynamoDbTableReplicaGlobalSecondaryIndex extends SpeakeasyBase {
    indexName?: string;
    provisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
}
