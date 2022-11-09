import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DistrictStatusStateEnum {
    Running = "running",
    Pending = "pending",
    Error = "error",
    Paused = "paused"
}
export declare class DistrictStatus extends SpeakeasyBase {
    error?: string;
    id?: string;
    instantLogin?: boolean;
    lastSync?: string;
    launchDate?: string;
    pauseEnd?: string;
    pauseStart?: string;
    sisType?: string;
    state?: DistrictStatusStateEnum;
}
