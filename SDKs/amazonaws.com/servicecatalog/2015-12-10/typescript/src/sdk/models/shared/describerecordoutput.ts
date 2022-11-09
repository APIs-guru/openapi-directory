import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecordDetail } from "./recorddetail";
import { RecordOutput } from "./recordoutput";


export class DescribeRecordOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=RecordDetail" })
  recordDetail?: RecordDetail;

  @Metadata({ data: "json, name=RecordOutputs", elemType: shared.RecordOutput })
  recordOutputs?: RecordOutput[];
}
