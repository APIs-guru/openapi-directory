import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReviewPolicy } from "./reviewpolicy";
import { ReviewReport } from "./reviewreport";



export class ListReviewPolicyResultsForHitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignmentReviewPolicy" })
  assignmentReviewPolicy?: ReviewPolicy;

  @SpeakeasyMetadata({ data: "json, name=AssignmentReviewReport" })
  assignmentReviewReport?: ReviewReport;

  @SpeakeasyMetadata({ data: "json, name=HITId" })
  hitId?: string;

  @SpeakeasyMetadata({ data: "json, name=HITReviewPolicy" })
  hitReviewPolicy?: ReviewPolicy;

  @SpeakeasyMetadata({ data: "json, name=HITReviewReport" })
  hitReviewReport?: ReviewReport;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
