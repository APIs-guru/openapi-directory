import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DockerImage } from "./dockerimage";


// ListDockerImagesResponse
/** 
 * The response from listing docker images.
**/
export class ListDockerImagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dockerImages", elemType: shared.DockerImage })
  dockerImages?: DockerImage[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
