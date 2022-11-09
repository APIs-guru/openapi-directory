import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLogGroupFieldsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=time" })
  time?: number;
}
