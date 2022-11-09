import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CandidateArtifactLocations
/** 
 * The location of artifacts for an AutoML candidate job.
**/
export class CandidateArtifactLocations extends SpeakeasyBase {
  @Metadata({ data: "json, name=Explainability" })
  explainability: string;
}
