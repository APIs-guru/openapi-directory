import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Volume } from "./volume";
/**
 * Machine resources for a version.
**/
export declare class Resources extends SpeakeasyBase {
    cpu?: number;
    diskGb?: number;
    kmsKeyReference?: string;
    memoryGb?: number;
    volumes?: Volume[];
}
