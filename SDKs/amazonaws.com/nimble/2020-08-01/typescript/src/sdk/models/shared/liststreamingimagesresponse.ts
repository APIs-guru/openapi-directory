import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StreamingImage } from "./streamingimage";


export class ListStreamingImagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=streamingImages", elemType: shared.StreamingImage })
  streamingImages?: StreamingImage[];
}
