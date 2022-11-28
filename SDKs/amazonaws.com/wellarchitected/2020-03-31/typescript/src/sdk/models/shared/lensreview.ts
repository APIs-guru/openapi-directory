import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LensStatusEnum } from "./lensstatusenum";
import { PillarReviewSummary } from "./pillarreviewsummary";



// LensReview
/** 
 * A lens review of a question.
**/
export class LensReview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=LensName" })
  lensName?: string;

  @SpeakeasyMetadata({ data: "json, name=LensStatus" })
  lensStatus?: LensStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LensVersion" })
  lensVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=PillarReviewSummaries", elemType: PillarReviewSummary })
  pillarReviewSummaries?: PillarReviewSummary[];

  @SpeakeasyMetadata({ data: "json, name=RiskCounts" })
  riskCounts?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
