import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleDevtoolsArtifactregistryV1File } from "./googledevtoolsartifactregistryv1file";


// ListFilesResponse
/** 
 * The response from listing files.
**/
export class ListFilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=files", elemType: shared.GoogleDevtoolsArtifactregistryV1File })
  files?: GoogleDevtoolsArtifactregistryV1File[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
