import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecordDetail } from "./recorddetail";


export class ListRecordHistoryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=RecordDetails", elemType: shared.RecordDetail })
  recordDetails?: RecordDetail[];
}
