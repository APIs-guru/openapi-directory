import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsDynamoDbTableKeySchema } from "./awsdynamodbtablekeyschema";
import { AwsDynamoDbTableProjection } from "./awsdynamodbtableprojection";
import { AwsDynamoDbTableProvisionedThroughput } from "./awsdynamodbtableprovisionedthroughput";


// AwsDynamoDbTableGlobalSecondaryIndex
/** 
 * Information abut a global secondary index for the table.
**/
export class AwsDynamoDbTableGlobalSecondaryIndex extends SpeakeasyBase {
  @Metadata({ data: "json, name=Backfilling" })
  backfilling?: boolean;

  @Metadata({ data: "json, name=IndexArn" })
  indexArn?: string;

  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=IndexSizeBytes" })
  indexSizeBytes?: number;

  @Metadata({ data: "json, name=IndexStatus" })
  indexStatus?: string;

  @Metadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @Metadata({ data: "json, name=KeySchema", elemType: shared.AwsDynamoDbTableKeySchema })
  keySchema?: AwsDynamoDbTableKeySchema[];

  @Metadata({ data: "json, name=Projection" })
  projection?: AwsDynamoDbTableProjection;

  @Metadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
}
