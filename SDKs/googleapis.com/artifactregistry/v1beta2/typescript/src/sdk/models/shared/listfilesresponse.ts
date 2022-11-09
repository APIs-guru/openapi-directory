import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleDevtoolsArtifactregistryV1beta2File } from "./googledevtoolsartifactregistryv1beta2file";


// ListFilesResponse
/** 
 * The response from listing files.
**/
export class ListFilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=files", elemType: shared.GoogleDevtoolsArtifactregistryV1beta2File })
  files?: GoogleDevtoolsArtifactregistryV1beta2File[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
