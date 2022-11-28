import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeSnapshotsRequest extends SpeakeasyBase {
    clusterName?: string;
    maxResults?: number;
    nextToken?: string;
    showDetail?: boolean;
    snapshotName?: string;
    source?: string;
}
