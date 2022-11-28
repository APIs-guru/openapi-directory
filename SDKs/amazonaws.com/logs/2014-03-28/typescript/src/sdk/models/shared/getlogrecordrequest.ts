import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLogRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logRecordPointer" })
  logRecordPointer: string;
}
