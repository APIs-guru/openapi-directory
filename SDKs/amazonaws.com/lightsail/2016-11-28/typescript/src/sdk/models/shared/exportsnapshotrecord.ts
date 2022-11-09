import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationInfo } from "./destinationinfo";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { ExportSnapshotRecordSourceInfo } from "./exportsnapshotrecordsourceinfo";
import { RecordStateEnum } from "./recordstateenum";


// ExportSnapshotRecord
/** 
 * Describes an export snapshot record.
**/
export class ExportSnapshotRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=destinationInfo" })
  destinationInfo?: DestinationInfo;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=sourceInfo" })
  sourceInfo?: ExportSnapshotRecordSourceInfo;

  @Metadata({ data: "json, name=state" })
  state?: RecordStateEnum;
}
