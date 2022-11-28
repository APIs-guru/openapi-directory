import { SpeakeasyBase } from "../../../internal/utils";
import { DiskSnapshotInfo } from "./disksnapshotinfo";
import { InstanceSnapshotInfo } from "./instancesnapshotinfo";
import { ExportSnapshotRecordSourceTypeEnum } from "./exportsnapshotrecordsourcetypeenum";
/**
 * Describes the source of an export snapshot record.
**/
export declare class ExportSnapshotRecordSourceInfo extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    diskSnapshotInfo?: DiskSnapshotInfo;
    fromResourceArn?: string;
    fromResourceName?: string;
    instanceSnapshotInfo?: InstanceSnapshotInfo;
    name?: string;
    resourceType?: ExportSnapshotRecordSourceTypeEnum;
}
