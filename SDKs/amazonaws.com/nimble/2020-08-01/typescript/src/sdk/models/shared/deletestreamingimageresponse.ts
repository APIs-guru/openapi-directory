import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingImage } from "./streamingimage";


export class DeleteStreamingImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=streamingImage" })
  streamingImage?: StreamingImage;
}
