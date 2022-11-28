import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExportSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceSnapshotName" })
  sourceSnapshotName: string;
}
