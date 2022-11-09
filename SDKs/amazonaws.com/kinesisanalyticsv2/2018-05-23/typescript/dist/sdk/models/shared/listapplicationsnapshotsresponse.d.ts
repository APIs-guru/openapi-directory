import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SnapshotDetails } from "./snapshotdetails";
export declare class ListApplicationSnapshotsResponse extends SpeakeasyBase {
    nextToken?: string;
    snapshotSummaries?: SnapshotDetails[];
}
