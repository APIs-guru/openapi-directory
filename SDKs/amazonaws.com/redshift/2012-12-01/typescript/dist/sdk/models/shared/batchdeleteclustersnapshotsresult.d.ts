import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotErrorMessage } from "./snapshoterrormessage";
export declare class BatchDeleteClusterSnapshotsResult extends SpeakeasyBase {
    errors?: SnapshotErrorMessage[];
    resources?: string[];
}
