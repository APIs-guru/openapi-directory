import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExportSnapshotRecordsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
