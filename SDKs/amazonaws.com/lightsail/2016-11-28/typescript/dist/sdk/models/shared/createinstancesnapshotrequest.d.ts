import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateInstanceSnapshotRequest extends SpeakeasyBase {
    instanceName: string;
    instanceSnapshotName: string;
    tags?: Tag[];
}
