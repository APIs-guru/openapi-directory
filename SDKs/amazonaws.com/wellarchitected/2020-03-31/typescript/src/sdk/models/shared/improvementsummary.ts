import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RiskEnum } from "./riskenum";



// ImprovementSummary
/** 
 * An improvement summary of a lens review in a workload.
**/
export class ImprovementSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImprovementPlanUrl" })
  improvementPlanUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=PillarId" })
  pillarId?: string;

  @SpeakeasyMetadata({ data: "json, name=QuestionId" })
  questionId?: string;

  @SpeakeasyMetadata({ data: "json, name=QuestionTitle" })
  questionTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk?: RiskEnum;
}
