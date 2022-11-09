import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LensStatusEnum } from "./lensstatusenum";


// LensReviewSummary
/** 
 * A lens review summary of a workload.
**/
export class LensReviewSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @Metadata({ data: "json, name=LensName" })
  lensName?: string;

  @Metadata({ data: "json, name=LensStatus" })
  lensStatus?: LensStatusEnum;

  @Metadata({ data: "json, name=LensVersion" })
  lensVersion?: string;

  @Metadata({ data: "json, name=RiskCounts" })
  riskCounts?: Map<string, number>;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
