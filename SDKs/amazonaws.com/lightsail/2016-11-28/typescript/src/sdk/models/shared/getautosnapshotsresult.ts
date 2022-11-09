import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoSnapshotDetails } from "./autosnapshotdetails";
import { ResourceTypeEnum } from "./resourcetypeenum";


export class GetAutoSnapshotsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoSnapshots", elemType: shared.AutoSnapshotDetails })
  autoSnapshots?: AutoSnapshotDetails[];

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;
}
