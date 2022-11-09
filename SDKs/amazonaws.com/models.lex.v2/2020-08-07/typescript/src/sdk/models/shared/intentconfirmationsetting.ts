import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResponseSpecification } from "./responsespecification";
import { PromptSpecification } from "./promptspecification";


// IntentConfirmationSetting
/** 
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
**/
export class IntentConfirmationSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=declinationResponse" })
  declinationResponse: ResponseSpecification;

  @Metadata({ data: "json, name=promptSpecification" })
  promptSpecification: PromptSpecification;
}
