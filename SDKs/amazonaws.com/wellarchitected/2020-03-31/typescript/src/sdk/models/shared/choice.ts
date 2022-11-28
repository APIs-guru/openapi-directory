import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Choice
/** 
 * A choice available to answer question.
**/
export class Choice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChoiceId" })
  choiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}
