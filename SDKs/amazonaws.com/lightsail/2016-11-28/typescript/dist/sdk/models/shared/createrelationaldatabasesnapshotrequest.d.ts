import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateRelationalDatabaseSnapshotRequest extends SpeakeasyBase {
    relationalDatabaseName: string;
    relationalDatabaseSnapshotName: string;
    tags?: Tag[];
}
