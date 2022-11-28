import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingImage } from "./streamingimage";



export class ListStreamingImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=streamingImages", elemType: StreamingImage })
  streamingImages?: StreamingImage[];
}
