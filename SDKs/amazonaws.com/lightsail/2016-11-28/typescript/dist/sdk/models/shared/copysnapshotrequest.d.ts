import { SpeakeasyBase } from "../../../internal/utils";
import { RegionNameEnum } from "./regionnameenum";
export declare class CopySnapshotRequest extends SpeakeasyBase {
    restoreDate?: string;
    sourceRegion: RegionNameEnum;
    sourceResourceName?: string;
    sourceSnapshotName?: string;
    targetSnapshotName: string;
    useLatestRestorableAutoSnapshot?: boolean;
}
