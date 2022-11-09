import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Choice
/** 
 * A choice available to answer question.
**/
export class Choice extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChoiceId" })
  choiceId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}
