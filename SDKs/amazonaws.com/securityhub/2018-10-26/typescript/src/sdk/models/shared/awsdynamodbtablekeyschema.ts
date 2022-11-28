import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsDynamoDbTableKeySchema
/** 
 * A component of the key schema for the DynamoDB table, a global secondary index, or a local secondary index.
**/
export class AwsDynamoDbTableKeySchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyType" })
  keyType?: string;
}
