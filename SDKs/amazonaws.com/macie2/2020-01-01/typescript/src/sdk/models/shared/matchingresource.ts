import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchingBucket } from "./matchingbucket";



// MatchingResource
/** 
 * Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes.
**/
export class MatchingResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchingBucket" })
  matchingBucket?: MatchingBucket;
}
