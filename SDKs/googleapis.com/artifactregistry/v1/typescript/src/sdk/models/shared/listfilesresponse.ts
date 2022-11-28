import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsArtifactregistryV1File } from "./googledevtoolsartifactregistryv1file";



// ListFilesResponse
/** 
 * The response from listing files.
**/
export class ListFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: GoogleDevtoolsArtifactregistryV1File })
  files?: GoogleDevtoolsArtifactregistryV1File[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
