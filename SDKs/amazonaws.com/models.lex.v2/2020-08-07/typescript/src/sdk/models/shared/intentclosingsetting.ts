import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseSpecification } from "./responsespecification";



// IntentClosingSetting
/** 
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
**/
export class IntentClosingSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=closingResponse" })
  closingResponse: ResponseSpecification;
}
