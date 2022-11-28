import { SpeakeasyBase } from "../../../internal/utils";
import { CandidateArtifactLocations } from "./candidateartifactlocations";
import { MetricDatum } from "./metricdatum";
/**
 * The properties of an AutoML candidate job.
**/
export declare class CandidateProperties extends SpeakeasyBase {
    candidateArtifactLocations?: CandidateArtifactLocations;
    candidateMetrics?: MetricDatum[];
}
