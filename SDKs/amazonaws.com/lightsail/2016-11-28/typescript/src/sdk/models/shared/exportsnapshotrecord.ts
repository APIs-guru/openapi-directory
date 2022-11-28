import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=destinationInfo" })
  destinationInfo?: DestinationInfo;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceInfo" })
  sourceInfo?: ExportSnapshotRecordSourceInfo;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: RecordStateEnum;
}
