import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BasicLevel } from "./basiclevel";
import { CustomLevel } from "./customlevel";
/**
 * An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
**/
export declare class AccessLevel extends SpeakeasyBase {
    basic?: BasicLevel;
    custom?: CustomLevel;
    description?: string;
    name?: string;
    title?: string;
}
