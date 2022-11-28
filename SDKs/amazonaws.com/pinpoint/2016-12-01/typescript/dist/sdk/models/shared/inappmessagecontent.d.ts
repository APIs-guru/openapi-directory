import { SpeakeasyBase } from "../../../internal/utils";
import { InAppMessageBodyConfig } from "./inappmessagebodyconfig";
import { InAppMessageHeaderConfig } from "./inappmessageheaderconfig";
import { InAppMessageButton } from "./inappmessagebutton";
/**
 * The configuration for the message content.
**/
export declare class InAppMessageContent extends SpeakeasyBase {
    backgroundColor?: string;
    bodyConfig?: InAppMessageBodyConfig;
    headerConfig?: InAppMessageHeaderConfig;
    imageUrl?: string;
    primaryBtn?: InAppMessageButton;
    secondaryBtn?: InAppMessageButton;
}
