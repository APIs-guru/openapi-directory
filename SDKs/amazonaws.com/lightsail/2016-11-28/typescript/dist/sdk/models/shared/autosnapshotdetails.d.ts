import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedDisk } from "./attacheddisk";
import { AutoSnapshotStatusEnum } from "./autosnapshotstatusenum";
/**
 * Describes an automatic snapshot.
**/
export declare class AutoSnapshotDetails extends SpeakeasyBase {
    createdAt?: Date;
    date?: string;
    fromAttachedDisks?: AttachedDisk[];
    status?: AutoSnapshotStatusEnum;
}
