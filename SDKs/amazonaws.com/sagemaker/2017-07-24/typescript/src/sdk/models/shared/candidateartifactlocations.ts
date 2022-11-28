import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CandidateArtifactLocations
/** 
 * The location of artifacts for an AutoML candidate job.
**/
export class CandidateArtifactLocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Explainability" })
  explainability: string;
}
