import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsArtifactregistryV1beta2File } from "./googledevtoolsartifactregistryv1beta2file";



// ListFilesResponse
/** 
 * The response from listing files.
**/
export class ListFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: GoogleDevtoolsArtifactregistryV1beta2File })
  files?: GoogleDevtoolsArtifactregistryV1beta2File[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
