import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LensStatusEnum } from "./lensstatusenum";
import { PillarReviewSummary } from "./pillarreviewsummary";


// LensReview
/** 
 * A lens review of a question.
**/
export class LensReview extends SpeakeasyBase {
  @Metadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @Metadata({ data: "json, name=LensName" })
  lensName?: string;

  @Metadata({ data: "json, name=LensStatus" })
  lensStatus?: LensStatusEnum;

  @Metadata({ data: "json, name=LensVersion" })
  lensVersion?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=PillarReviewSummaries", elemType: shared.PillarReviewSummary })
  pillarReviewSummaries?: PillarReviewSummary[];

  @Metadata({ data: "json, name=RiskCounts" })
  riskCounts?: Map<string, number>;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
