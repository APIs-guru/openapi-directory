import { SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopDataAttributes } from "./humanloopdataattributes";
/**
 * Sets up the human review workflow the document will be sent to if one of the conditions is met. You can also set certain attributes of the image before review.
**/
export declare class HumanLoopConfig extends SpeakeasyBase {
    dataAttributes?: HumanLoopDataAttributes;
    flowDefinitionArn: string;
    humanLoopName: string;
}
