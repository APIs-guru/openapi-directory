import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReviewPolicyLevelEnum } from "./reviewpolicylevelenum";


export class ListReviewPolicyResultsForHitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HITId" })
  hitId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PolicyLevels" })
  policyLevels?: ReviewPolicyLevelEnum[];

  @Metadata({ data: "json, name=RetrieveActions" })
  retrieveActions?: boolean;

  @Metadata({ data: "json, name=RetrieveResults" })
  retrieveResults?: boolean;
}
