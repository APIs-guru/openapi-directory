import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotErrorMessage } from "./snapshoterrormessage";
export declare class BatchModifyClusterSnapshotsOutputMessage extends SpeakeasyBase {
    errors?: SnapshotErrorMessage[];
    resources?: string[];
}
