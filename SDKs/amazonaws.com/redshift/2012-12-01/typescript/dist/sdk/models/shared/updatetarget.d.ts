import { SpeakeasyBase } from "../../../internal/utils";
import { SupportedOperation } from "./supportedoperation";
/**
 * A maintenance track that you can switch the current track to.
**/
export declare class UpdateTarget extends SpeakeasyBase {
    databaseVersion?: string;
    maintenanceTrackName?: string;
    supportedOperations?: SupportedOperation[];
}
