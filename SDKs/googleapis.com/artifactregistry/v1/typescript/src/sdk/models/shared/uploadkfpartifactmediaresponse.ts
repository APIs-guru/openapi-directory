import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Operation } from "./operation";


// UploadKfpArtifactMediaResponse
/** 
 * The response to upload an artifact.
**/
export class UploadKfpArtifactMediaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation?: Operation;
}
