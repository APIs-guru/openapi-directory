import { SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";
export declare class DescribeSnapshotsResponse extends SpeakeasyBase {
    nextToken?: string;
    snapshots?: Snapshot[];
}
