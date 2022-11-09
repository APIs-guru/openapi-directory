import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RiskEnum } from "./riskenum";
/**
 * An improvement summary of a lens review in a workload.
**/
export declare class ImprovementSummary extends SpeakeasyBase {
    improvementPlanUrl?: string;
    pillarId?: string;
    questionId?: string;
    questionTitle?: string;
    risk?: RiskEnum;
}
