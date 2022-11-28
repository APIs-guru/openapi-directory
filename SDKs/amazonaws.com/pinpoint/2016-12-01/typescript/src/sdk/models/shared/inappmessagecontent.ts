import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InAppMessageBodyConfig } from "./inappmessagebodyconfig";
import { InAppMessageHeaderConfig } from "./inappmessageheaderconfig";
import { InAppMessageButton } from "./inappmessagebutton";



// InAppMessageContent
/** 
 * The configuration for the message content.
**/
export class InAppMessageContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackgroundColor" })
  backgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=BodyConfig" })
  bodyConfig?: InAppMessageBodyConfig;

  @SpeakeasyMetadata({ data: "json, name=HeaderConfig" })
  headerConfig?: InAppMessageHeaderConfig;

  @SpeakeasyMetadata({ data: "json, name=ImageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryBtn" })
  primaryBtn?: InAppMessageButton;

  @SpeakeasyMetadata({ data: "json, name=SecondaryBtn" })
  secondaryBtn?: InAppMessageButton;
}
