import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReviewPolicy } from "./reviewpolicy";
import { ReviewReport } from "./reviewreport";
import { ReviewPolicy } from "./reviewpolicy";
import { ReviewReport } from "./reviewreport";


export class ListReviewPolicyResultsForHitResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignmentReviewPolicy" })
  assignmentReviewPolicy?: ReviewPolicy;

  @Metadata({ data: "json, name=AssignmentReviewReport" })
  assignmentReviewReport?: ReviewReport;

  @Metadata({ data: "json, name=HITId" })
  hitId?: string;

  @Metadata({ data: "json, name=HITReviewPolicy" })
  hitReviewPolicy?: ReviewPolicy;

  @Metadata({ data: "json, name=HITReviewReport" })
  hitReviewReport?: ReviewReport;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
