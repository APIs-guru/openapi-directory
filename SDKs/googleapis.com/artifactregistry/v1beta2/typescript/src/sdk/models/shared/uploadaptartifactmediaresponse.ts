import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Operation } from "./operation";


// UploadAptArtifactMediaResponse
/** 
 * The response to upload an artifact.
**/
export class UploadAptArtifactMediaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation?: Operation;
}
