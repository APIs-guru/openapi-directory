import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsDynamoDbTableKeySchema
/** 
 * A component of the key schema for the DynamoDB table, a global secondary index, or a local secondary index.
**/
export class AwsDynamoDbTableKeySchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=KeyType" })
  keyType?: string;
}
