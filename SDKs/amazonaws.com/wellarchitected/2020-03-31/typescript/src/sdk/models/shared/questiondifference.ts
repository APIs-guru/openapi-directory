import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DifferenceStatusEnum } from "./differencestatusenum";


// QuestionDifference
/** 
 * A question difference return object.
**/
export class QuestionDifference extends SpeakeasyBase {
  @Metadata({ data: "json, name=DifferenceStatus" })
  differenceStatus?: DifferenceStatusEnum;

  @Metadata({ data: "json, name=QuestionId" })
  questionId?: string;

  @Metadata({ data: "json, name=QuestionTitle" })
  questionTitle?: string;
}
