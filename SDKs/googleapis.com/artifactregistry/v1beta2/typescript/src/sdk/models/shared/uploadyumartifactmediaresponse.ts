import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";



// UploadYumArtifactMediaResponse
/** 
 * The response to upload an artifact.
**/
export class UploadYumArtifactMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;
}
