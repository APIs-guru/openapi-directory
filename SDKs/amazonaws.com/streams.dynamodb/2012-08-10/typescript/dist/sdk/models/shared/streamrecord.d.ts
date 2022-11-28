import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { StreamViewTypeEnum } from "./streamviewtypeenum";
/**
 * A description of a single data modification that was performed on an item in a DynamoDB table.
**/
export declare class StreamRecord extends SpeakeasyBase {
    approximateCreationDateTime?: Date;
    keys?: Map<string, AttributeValue>;
    newImage?: Map<string, AttributeValue>;
    oldImage?: Map<string, AttributeValue>;
    sequenceNumber?: string;
    sizeBytes?: number;
    streamViewType?: StreamViewTypeEnum;
}
