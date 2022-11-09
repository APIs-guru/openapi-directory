import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLogRecordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=logRecordPointer" })
  logRecordPointer: string;
}
