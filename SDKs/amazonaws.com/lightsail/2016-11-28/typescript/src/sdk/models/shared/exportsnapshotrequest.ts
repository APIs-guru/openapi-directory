import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExportSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceSnapshotName" })
  sourceSnapshotName: string;
}
