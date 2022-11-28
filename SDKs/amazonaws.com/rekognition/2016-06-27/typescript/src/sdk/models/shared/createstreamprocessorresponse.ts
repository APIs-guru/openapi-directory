import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateStreamProcessorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamProcessorArn" })
  streamProcessorArn?: string;
}
