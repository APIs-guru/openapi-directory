import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsDynamoDbTableStreamSpecification
/** 
 * The current DynamoDB Streams configuration for the table.
**/
export class AwsDynamoDbTableStreamSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamEnabled" })
  streamEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=StreamViewType" })
  streamViewType?: string;
}
