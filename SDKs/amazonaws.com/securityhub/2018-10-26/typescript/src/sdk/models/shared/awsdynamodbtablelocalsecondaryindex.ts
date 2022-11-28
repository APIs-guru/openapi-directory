import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsDynamoDbTableKeySchema } from "./awsdynamodbtablekeyschema";
import { AwsDynamoDbTableProjection } from "./awsdynamodbtableprojection";



// AwsDynamoDbTableLocalSecondaryIndex
/** 
 * Information about a local secondary index for a DynamoDB table.
**/
export class AwsDynamoDbTableLocalSecondaryIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexArn" })
  indexArn?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: AwsDynamoDbTableKeySchema })
  keySchema?: AwsDynamoDbTableKeySchema[];

  @SpeakeasyMetadata({ data: "json, name=Projection" })
  projection?: AwsDynamoDbTableProjection;
}
