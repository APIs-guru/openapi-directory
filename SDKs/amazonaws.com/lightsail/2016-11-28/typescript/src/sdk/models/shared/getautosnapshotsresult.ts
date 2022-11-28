import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoSnapshotDetails } from "./autosnapshotdetails";
import { ResourceTypeEnum } from "./resourcetypeenum";



export class GetAutoSnapshotsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoSnapshots", elemType: AutoSnapshotDetails })
  autoSnapshots?: AutoSnapshotDetails[];

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;
}
