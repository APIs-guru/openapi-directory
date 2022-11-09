import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MatchingBucket } from "./matchingbucket";


// MatchingResource
/** 
 * Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes.
**/
export class MatchingResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchingBucket" })
  matchingBucket?: MatchingBucket;
}
