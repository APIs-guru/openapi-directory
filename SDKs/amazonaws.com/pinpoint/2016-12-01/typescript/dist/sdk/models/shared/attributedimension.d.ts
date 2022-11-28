import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeTypeEnum } from "./attributetypeenum";
/**
 * Specifies attribute-based criteria for including or excluding endpoints from a segment.
**/
export declare class AttributeDimension extends SpeakeasyBase {
    attributeType?: AttributeTypeEnum;
    values: string[];
}
