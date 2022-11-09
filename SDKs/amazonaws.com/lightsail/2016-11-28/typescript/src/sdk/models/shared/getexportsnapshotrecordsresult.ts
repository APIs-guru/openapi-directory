import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExportSnapshotRecord } from "./exportsnapshotrecord";


export class GetExportSnapshotRecordsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportSnapshotRecords", elemType: shared.ExportSnapshotRecord })
  exportSnapshotRecords?: ExportSnapshotRecord[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
