import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CandidateArtifactLocations } from "./candidateartifactlocations";
import { MetricDatum } from "./metricdatum";


// CandidateProperties
/** 
 * The properties of an AutoML candidate job.
**/
export class CandidateProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=CandidateArtifactLocations" })
  candidateArtifactLocations?: CandidateArtifactLocations;

  @Metadata({ data: "json, name=CandidateMetrics", elemType: shared.MetricDatum })
  candidateMetrics?: MetricDatum[];
}
