import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
import { Parent } from "./parent";
/**
 * <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p>
**/
export declare class Label extends SpeakeasyBase {
    confidence?: number;
    instances?: Instance[];
    name?: string;
    parents?: Parent[];
}
