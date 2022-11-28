import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoalData
/** 
 * Represents all the details pertaining to a goal.
**/
export class GoalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=goalCompletionLocation" })
  goalCompletionLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=goalCompletions" })
  goalCompletions?: string;

  @SpeakeasyMetadata({ data: "json, name=goalIndex" })
  goalIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=goalName" })
  goalName?: string;

  @SpeakeasyMetadata({ data: "json, name=goalPreviousStep1" })
  goalPreviousStep1?: string;

  @SpeakeasyMetadata({ data: "json, name=goalPreviousStep2" })
  goalPreviousStep2?: string;

  @SpeakeasyMetadata({ data: "json, name=goalPreviousStep3" })
  goalPreviousStep3?: string;

  @SpeakeasyMetadata({ data: "json, name=goalValue" })
  goalValue?: number;
}
