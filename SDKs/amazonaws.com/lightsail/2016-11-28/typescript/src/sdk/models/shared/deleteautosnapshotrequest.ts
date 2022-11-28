import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAutoSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;
}
