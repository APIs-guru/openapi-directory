import { SpeakeasyBase } from "../../../internal/utils";
import { UploadBehaviorEnum } from "./uploadbehaviorenum";
/**
 * Provides upload configuration information. Files are uploaded from the simulation job to a location you specify.
**/
export declare class UploadConfiguration extends SpeakeasyBase {
    name: string;
    path: string;
    uploadBehavior: UploadBehaviorEnum;
}
