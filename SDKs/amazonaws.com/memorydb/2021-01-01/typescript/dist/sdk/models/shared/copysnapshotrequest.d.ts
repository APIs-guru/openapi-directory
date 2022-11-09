import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class CopySnapshotRequest extends SpeakeasyBase {
    kmsKeyId?: string;
    sourceSnapshotName: string;
    tags?: Tag[];
    targetBucket?: string;
    targetSnapshotName: string;
}
