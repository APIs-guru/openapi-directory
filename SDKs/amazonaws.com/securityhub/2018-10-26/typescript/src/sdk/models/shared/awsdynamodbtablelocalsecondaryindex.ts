import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsDynamoDbTableKeySchema } from "./awsdynamodbtablekeyschema";
import { AwsDynamoDbTableProjection } from "./awsdynamodbtableprojection";


// AwsDynamoDbTableLocalSecondaryIndex
/** 
 * Information about a local secondary index for a DynamoDB table.
**/
export class AwsDynamoDbTableLocalSecondaryIndex extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexArn" })
  indexArn?: string;

  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=KeySchema", elemType: shared.AwsDynamoDbTableKeySchema })
  keySchema?: AwsDynamoDbTableKeySchema[];

  @Metadata({ data: "json, name=Projection" })
  projection?: AwsDynamoDbTableProjection;
}
