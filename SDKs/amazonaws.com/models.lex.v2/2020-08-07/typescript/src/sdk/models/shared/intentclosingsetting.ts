import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResponseSpecification } from "./responsespecification";


// IntentClosingSetting
/** 
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
**/
export class IntentClosingSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=closingResponse" })
  closingResponse: ResponseSpecification;
}
