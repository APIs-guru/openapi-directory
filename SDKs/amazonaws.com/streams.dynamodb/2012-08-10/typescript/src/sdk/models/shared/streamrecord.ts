import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";
import { AttributeValue } from "./attributevalue";
import { AttributeValue } from "./attributevalue";
import { StreamViewTypeEnum } from "./streamviewtypeenum";


// StreamRecord
/** 
 * A description of a single data modification that was performed on an item in a DynamoDB table.
**/
export class StreamRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApproximateCreationDateTime" })
  approximateCreationDateTime?: Date;

  @Metadata({ data: "json, name=Keys", elemType: shared.AttributeValue })
  keys?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=NewImage", elemType: shared.AttributeValue })
  newImage?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=OldImage", elemType: shared.AttributeValue })
  oldImage?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=SequenceNumber" })
  sequenceNumber?: string;

  @Metadata({ data: "json, name=SizeBytes" })
  sizeBytes?: number;

  @Metadata({ data: "json, name=StreamViewType" })
  streamViewType?: StreamViewTypeEnum;
}
