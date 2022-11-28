import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsDynamoDbTableProvisionedThroughputOverride } from "./awsdynamodbtableprovisionedthroughputoverride";



// AwsDynamoDbTableReplicaGlobalSecondaryIndex
/** 
 * Information about a global secondary index for a DynamoDB table replica.
**/
export class AwsDynamoDbTableReplicaGlobalSecondaryIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
}
