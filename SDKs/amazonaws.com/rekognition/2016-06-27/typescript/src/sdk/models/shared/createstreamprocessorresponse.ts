import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateStreamProcessorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamProcessorArn" })
  streamProcessorArn?: string;
}
