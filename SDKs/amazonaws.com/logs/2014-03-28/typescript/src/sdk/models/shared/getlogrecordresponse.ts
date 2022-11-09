import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLogRecordResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=logRecord" })
  logRecord?: Map<string, string>;
}
