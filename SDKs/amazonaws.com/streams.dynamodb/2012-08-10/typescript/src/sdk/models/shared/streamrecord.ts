import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { StreamViewTypeEnum } from "./streamviewtypeenum";



// StreamRecord
/** 
 * A description of a single data modification that was performed on an item in a DynamoDB table.
**/
export class StreamRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApproximateCreationDateTime" })
  approximateCreationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Keys", elemType: AttributeValue })
  keys?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=NewImage", elemType: AttributeValue })
  newImage?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=OldImage", elemType: AttributeValue })
  oldImage?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=SequenceNumber" })
  sequenceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=SizeBytes" })
  sizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=StreamViewType" })
  streamViewType?: StreamViewTypeEnum;
}
