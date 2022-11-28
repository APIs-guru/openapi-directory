import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DifferenceStatusEnum } from "./differencestatusenum";
import { QuestionDifference } from "./questiondifference";



// PillarDifference
/** 
 * A pillar difference return object.
**/
export class PillarDifference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DifferenceStatus" })
  differenceStatus?: DifferenceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=PillarId" })
  pillarId?: string;

  @SpeakeasyMetadata({ data: "json, name=QuestionDifferences", elemType: QuestionDifference })
  questionDifferences?: QuestionDifference[];
}
