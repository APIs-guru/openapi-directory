import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskSnapshotInfo } from "./disksnapshotinfo";
import { InstanceSnapshotInfo } from "./instancesnapshotinfo";
import { ExportSnapshotRecordSourceTypeEnum } from "./exportsnapshotrecordsourcetypeenum";



// ExportSnapshotRecordSourceInfo
/** 
 * Describes the source of an export snapshot record.
**/
export class ExportSnapshotRecordSourceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=diskSnapshotInfo" })
  diskSnapshotInfo?: DiskSnapshotInfo;

  @SpeakeasyMetadata({ data: "json, name=fromResourceArn" })
  fromResourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=fromResourceName" })
  fromResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceSnapshotInfo" })
  instanceSnapshotInfo?: InstanceSnapshotInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ExportSnapshotRecordSourceTypeEnum;
}
