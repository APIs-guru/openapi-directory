import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsDynamoDbTableProvisionedThroughputOverride } from "./awsdynamodbtableprovisionedthroughputoverride";


// AwsDynamoDbTableReplicaGlobalSecondaryIndex
/** 
 * Information about a global secondary index for a DynamoDB table replica.
**/
export class AwsDynamoDbTableReplicaGlobalSecondaryIndex extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
}
