import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SnapshotStatusEnum } from "./snapshotstatusenum";
/**
 * Provides details about a snapshot of application state.
**/
export declare class SnapshotDetails extends SpeakeasyBase {
    applicationVersionId: number;
    snapshotCreationTimestamp?: Date;
    snapshotName: string;
    snapshotStatus: SnapshotStatusEnum;
}
