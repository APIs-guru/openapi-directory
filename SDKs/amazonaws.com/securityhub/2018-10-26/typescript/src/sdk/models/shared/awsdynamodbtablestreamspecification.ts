import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsDynamoDbTableStreamSpecification
/** 
 * The current DynamoDB Streams configuration for the table.
**/
export class AwsDynamoDbTableStreamSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamEnabled" })
  streamEnabled?: boolean;

  @Metadata({ data: "json, name=StreamViewType" })
  streamViewType?: string;
}
