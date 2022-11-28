import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateSnapshotRequest extends SpeakeasyBase {
    clusterName: string;
    kmsKeyId?: string;
    snapshotName: string;
    tags?: Tag[];
}
