import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DiskSnapshotInfo } from "./disksnapshotinfo";
import { InstanceSnapshotInfo } from "./instancesnapshotinfo";
import { ExportSnapshotRecordSourceTypeEnum } from "./exportsnapshotrecordsourcetypeenum";


// ExportSnapshotRecordSourceInfo
/** 
 * Describes the source of an export snapshot record.
**/
export class ExportSnapshotRecordSourceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=diskSnapshotInfo" })
  diskSnapshotInfo?: DiskSnapshotInfo;

  @Metadata({ data: "json, name=fromResourceArn" })
  fromResourceArn?: string;

  @Metadata({ data: "json, name=fromResourceName" })
  fromResourceName?: string;

  @Metadata({ data: "json, name=instanceSnapshotInfo" })
  instanceSnapshotInfo?: InstanceSnapshotInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ExportSnapshotRecordSourceTypeEnum;
}
