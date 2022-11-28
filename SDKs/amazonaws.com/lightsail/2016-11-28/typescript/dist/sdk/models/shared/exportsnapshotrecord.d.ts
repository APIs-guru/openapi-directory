import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationInfo } from "./destinationinfo";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { ExportSnapshotRecordSourceInfo } from "./exportsnapshotrecordsourceinfo";
import { RecordStateEnum } from "./recordstateenum";
/**
 * Describes an export snapshot record.
**/
export declare class ExportSnapshotRecord extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    destinationInfo?: DestinationInfo;
    location?: ResourceLocation;
    name?: string;
    resourceType?: ResourceTypeEnum;
    sourceInfo?: ExportSnapshotRecordSourceInfo;
    state?: RecordStateEnum;
}
