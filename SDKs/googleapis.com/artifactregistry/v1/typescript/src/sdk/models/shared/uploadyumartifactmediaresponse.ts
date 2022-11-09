import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Operation } from "./operation";


// UploadYumArtifactMediaResponse
/** 
 * The response to upload an artifact.
**/
export class UploadYumArtifactMediaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation?: Operation;
}
