import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExportSnapshotRecordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
