import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoalData
/** 
 * Represents all the details pertaining to a goal.
**/
export class GoalData extends SpeakeasyBase {
  @Metadata({ data: "json, name=goalCompletionLocation" })
  goalCompletionLocation?: string;

  @Metadata({ data: "json, name=goalCompletions" })
  goalCompletions?: string;

  @Metadata({ data: "json, name=goalIndex" })
  goalIndex?: number;

  @Metadata({ data: "json, name=goalName" })
  goalName?: string;

  @Metadata({ data: "json, name=goalPreviousStep1" })
  goalPreviousStep1?: string;

  @Metadata({ data: "json, name=goalPreviousStep2" })
  goalPreviousStep2?: string;

  @Metadata({ data: "json, name=goalPreviousStep3" })
  goalPreviousStep3?: string;

  @Metadata({ data: "json, name=goalValue" })
  goalValue?: number;
}
