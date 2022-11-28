import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";



// UploadAptArtifactMediaResponse
/** 
 * The response to upload an artifact.
**/
export class UploadAptArtifactMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;
}
