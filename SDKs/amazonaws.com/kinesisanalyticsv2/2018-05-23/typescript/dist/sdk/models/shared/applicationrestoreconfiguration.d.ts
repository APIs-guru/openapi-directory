import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationRestoreTypeEnum } from "./applicationrestoretypeenum";
/**
 * Specifies the method and snapshot to use when restarting an application using previously saved application state.
**/
export declare class ApplicationRestoreConfiguration extends SpeakeasyBase {
    applicationRestoreType: ApplicationRestoreTypeEnum;
    snapshotName?: string;
}
