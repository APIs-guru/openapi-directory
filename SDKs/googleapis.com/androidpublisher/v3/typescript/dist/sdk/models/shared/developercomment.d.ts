import { SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";
/**
 * Developer entry from conversation between user and developer.
**/
export declare class DeveloperComment extends SpeakeasyBase {
    lastModified?: Timestamp;
    text?: string;
}
