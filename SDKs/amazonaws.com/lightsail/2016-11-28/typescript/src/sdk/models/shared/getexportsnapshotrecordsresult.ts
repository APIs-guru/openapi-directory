import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportSnapshotRecord } from "./exportsnapshotrecord";



export class GetExportSnapshotRecordsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportSnapshotRecords", elemType: ExportSnapshotRecord })
  exportSnapshotRecords?: ExportSnapshotRecord[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
