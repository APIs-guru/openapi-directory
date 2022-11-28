import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReviewPolicyLevelEnum } from "./reviewpolicylevelenum";



export class ListReviewPolicyResultsForHitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HITId" })
  hitId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyLevels" })
  policyLevels?: ReviewPolicyLevelEnum[];

  @SpeakeasyMetadata({ data: "json, name=RetrieveActions" })
  retrieveActions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RetrieveResults" })
  retrieveResults?: boolean;
}
