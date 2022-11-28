import { SpeakeasyBase } from "../../../internal/utils";
import { AutoSnapshotDetails } from "./autosnapshotdetails";
import { ResourceTypeEnum } from "./resourcetypeenum";
export declare class GetAutoSnapshotsResult extends SpeakeasyBase {
    autoSnapshots?: AutoSnapshotDetails[];
    resourceName?: string;
    resourceType?: ResourceTypeEnum;
}
