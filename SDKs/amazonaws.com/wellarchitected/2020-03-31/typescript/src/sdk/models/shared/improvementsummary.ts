import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RiskEnum } from "./riskenum";


// ImprovementSummary
/** 
 * An improvement summary of a lens review in a workload.
**/
export class ImprovementSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImprovementPlanUrl" })
  improvementPlanUrl?: string;

  @Metadata({ data: "json, name=PillarId" })
  pillarId?: string;

  @Metadata({ data: "json, name=QuestionId" })
  questionId?: string;

  @Metadata({ data: "json, name=QuestionTitle" })
  questionTitle?: string;

  @Metadata({ data: "json, name=Risk" })
  risk?: RiskEnum;
}
