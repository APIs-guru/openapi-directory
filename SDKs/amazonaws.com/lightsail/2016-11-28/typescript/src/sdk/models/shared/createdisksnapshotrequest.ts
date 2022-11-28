import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateDiskSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskName" })
  diskName?: string;

  @SpeakeasyMetadata({ data: "json, name=diskSnapshotName" })
  diskSnapshotName: string;

  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
