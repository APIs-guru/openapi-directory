import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingImage } from "./streamingimage";



export class UpdateStreamingImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=streamingImage" })
  streamingImage?: StreamingImage;
}
