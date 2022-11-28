import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseSpecification } from "./responsespecification";
import { PromptSpecification } from "./promptspecification";



// IntentConfirmationSetting
/** 
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
**/
export class IntentConfirmationSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=declinationResponse" })
  declinationResponse: ResponseSpecification;

  @SpeakeasyMetadata({ data: "json, name=promptSpecification" })
  promptSpecification: PromptSpecification;
}
