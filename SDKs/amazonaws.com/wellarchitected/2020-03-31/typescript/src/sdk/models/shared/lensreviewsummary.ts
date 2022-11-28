import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LensStatusEnum } from "./lensstatusenum";



// LensReviewSummary
/** 
 * A lens review summary of a workload.
**/
export class LensReviewSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=LensName" })
  lensName?: string;

  @SpeakeasyMetadata({ data: "json, name=LensStatus" })
  lensStatus?: LensStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LensVersion" })
  lensVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=RiskCounts" })
  riskCounts?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
