import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DockerImage } from "./dockerimage";



// ListDockerImagesResponse
/** 
 * The response from listing docker images.
**/
export class ListDockerImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dockerImages", elemType: DockerImage })
  dockerImages?: DockerImage[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
