import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter
/** 
 * Filter scores by component path. Used custom filter instead of AIP-160 as the use cases are highly constrained and predictable.
**/
export class GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=scorePath" })
  scorePath?: string;
}
