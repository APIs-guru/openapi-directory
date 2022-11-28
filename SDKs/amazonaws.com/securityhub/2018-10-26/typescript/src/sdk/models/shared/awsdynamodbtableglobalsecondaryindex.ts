import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsDynamoDbTableKeySchema } from "./awsdynamodbtablekeyschema";
import { AwsDynamoDbTableProjection } from "./awsdynamodbtableprojection";
import { AwsDynamoDbTableProvisionedThroughput } from "./awsdynamodbtableprovisionedthroughput";



// AwsDynamoDbTableGlobalSecondaryIndex
/** 
 * Information abut a global secondary index for the table.
**/
export class AwsDynamoDbTableGlobalSecondaryIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Backfilling" })
  backfilling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IndexArn" })
  indexArn?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexSizeBytes" })
  indexSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=IndexStatus" })
  indexStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: AwsDynamoDbTableKeySchema })
  keySchema?: AwsDynamoDbTableKeySchema[];

  @SpeakeasyMetadata({ data: "json, name=Projection" })
  projection?: AwsDynamoDbTableProjection;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
}
