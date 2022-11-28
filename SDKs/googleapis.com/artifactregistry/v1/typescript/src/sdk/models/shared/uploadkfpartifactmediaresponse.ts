import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";



// UploadKfpArtifactMediaResponse
/** 
 * The response to upload an artifact.
**/
export class UploadKfpArtifactMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;
}
