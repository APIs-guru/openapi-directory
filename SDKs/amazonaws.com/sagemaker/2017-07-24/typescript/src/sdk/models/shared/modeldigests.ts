import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModelDigests
/** 
 * Provides information to verify the integrity of stored model artifacts. 
**/
export class ModelDigests extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactDigest" })
  artifactDigest?: string;
}
