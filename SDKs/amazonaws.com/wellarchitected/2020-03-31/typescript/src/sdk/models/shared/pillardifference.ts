import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DifferenceStatusEnum } from "./differencestatusenum";
import { QuestionDifference } from "./questiondifference";


// PillarDifference
/** 
 * A pillar difference return object.
**/
export class PillarDifference extends SpeakeasyBase {
  @Metadata({ data: "json, name=DifferenceStatus" })
  differenceStatus?: DifferenceStatusEnum;

  @Metadata({ data: "json, name=PillarId" })
  pillarId?: string;

  @Metadata({ data: "json, name=QuestionDifferences", elemType: shared.QuestionDifference })
  questionDifferences?: QuestionDifference[];
}
