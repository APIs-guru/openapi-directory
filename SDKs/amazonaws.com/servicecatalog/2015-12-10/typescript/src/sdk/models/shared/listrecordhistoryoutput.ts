import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordDetail } from "./recorddetail";



export class ListRecordHistoryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RecordDetails", elemType: RecordDetail })
  recordDetails?: RecordDetail[];
}
