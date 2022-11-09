import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateLogStreamRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=logStreamName" })
  logStreamName: string;
}
