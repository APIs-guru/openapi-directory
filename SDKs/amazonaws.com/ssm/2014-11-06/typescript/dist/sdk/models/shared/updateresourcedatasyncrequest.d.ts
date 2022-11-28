import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDataSyncSource } from "./resourcedatasyncsource";
export declare class UpdateResourceDataSyncRequest extends SpeakeasyBase {
    syncName: string;
    syncSource: ResourceDataSyncSource;
    syncType: string;
}
