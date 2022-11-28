import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateStreamOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn?: string;
}
