import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateInstanceSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;

  @SpeakeasyMetadata({ data: "json, name=instanceSnapshotName" })
  instanceSnapshotName: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
