import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordDetail } from "./recorddetail";
import { RecordOutput } from "./recordoutput";



export class DescribeRecordOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RecordDetail" })
  recordDetail?: RecordDetail;

  @SpeakeasyMetadata({ data: "json, name=RecordOutputs", elemType: RecordOutput })
  recordOutputs?: RecordOutput[];
}
