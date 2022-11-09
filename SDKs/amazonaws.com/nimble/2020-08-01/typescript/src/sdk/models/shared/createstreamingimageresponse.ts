import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingImage } from "./streamingimage";


export class CreateStreamingImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=streamingImage" })
  streamingImage?: StreamingImage;
}
