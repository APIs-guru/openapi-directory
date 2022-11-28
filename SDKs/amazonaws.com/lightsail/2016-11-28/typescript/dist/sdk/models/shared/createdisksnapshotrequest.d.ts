import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateDiskSnapshotRequest extends SpeakeasyBase {
    diskName?: string;
    diskSnapshotName: string;
    instanceName?: string;
    tags?: Tag[];
}
