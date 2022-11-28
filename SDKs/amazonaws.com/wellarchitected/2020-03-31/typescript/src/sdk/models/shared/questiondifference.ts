import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DifferenceStatusEnum } from "./differencestatusenum";



// QuestionDifference
/** 
 * A question difference return object.
**/
export class QuestionDifference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DifferenceStatus" })
  differenceStatus?: DifferenceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=QuestionId" })
  questionId?: string;

  @SpeakeasyMetadata({ data: "json, name=QuestionTitle" })
  questionTitle?: string;
}
