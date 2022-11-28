import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseSpecification } from "./responsespecification";
import { PromptSpecification } from "./promptspecification";
/**
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
**/
export declare class IntentConfirmationSetting extends SpeakeasyBase {
    active?: boolean;
    declinationResponse: ResponseSpecification;
    promptSpecification: PromptSpecification;
}
