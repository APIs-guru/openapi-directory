import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LensStatusEnum } from "./lensstatusenum";
/**
 * A lens review summary of a workload.
**/
export declare class LensReviewSummary extends SpeakeasyBase {
    lensAlias?: string;
    lensName?: string;
    lensStatus?: LensStatusEnum;
    lensVersion?: string;
    riskCounts?: Map<string, number>;
    updatedAt?: Date;
}
