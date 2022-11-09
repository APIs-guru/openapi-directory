import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateStreamOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamARN" })
  streamArn?: string;
}
