import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CandidateArtifactLocations } from "./candidateartifactlocations";
import { MetricDatum } from "./metricdatum";



// CandidateProperties
/** 
 * The properties of an AutoML candidate job.
**/
export class CandidateProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CandidateArtifactLocations" })
  candidateArtifactLocations?: CandidateArtifactLocations;

  @SpeakeasyMetadata({ data: "json, name=CandidateMetrics", elemType: MetricDatum })
  candidateMetrics?: MetricDatum[];
}
