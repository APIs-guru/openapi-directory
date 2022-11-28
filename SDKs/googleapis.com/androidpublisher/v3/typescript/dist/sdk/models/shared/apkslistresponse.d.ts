import { SpeakeasyBase } from "../../../internal/utils";
import { Apk } from "./apk";
/**
 * Response listing all APKs.
**/
export declare class ApksListResponse extends SpeakeasyBase {
    apks?: Apk[];
    kind?: string;
}
