import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModelDigests
/** 
 * Provides information to verify the integrity of stored model artifacts. 
**/
export class ModelDigests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactDigest" })
  artifactDigest?: string;
}
