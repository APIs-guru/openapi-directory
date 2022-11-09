import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InAppMessageBodyConfig } from "./inappmessagebodyconfig";
import { InAppMessageHeaderConfig } from "./inappmessageheaderconfig";
import { InAppMessageButton } from "./inappmessagebutton";
import { InAppMessageButton } from "./inappmessagebutton";


// InAppMessageContent
/** 
 * The configuration for the message content.
**/
export class InAppMessageContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackgroundColor" })
  backgroundColor?: string;

  @Metadata({ data: "json, name=BodyConfig" })
  bodyConfig?: InAppMessageBodyConfig;

  @Metadata({ data: "json, name=HeaderConfig" })
  headerConfig?: InAppMessageHeaderConfig;

  @Metadata({ data: "json, name=ImageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=PrimaryBtn" })
  primaryBtn?: InAppMessageButton;

  @Metadata({ data: "json, name=SecondaryBtn" })
  secondaryBtn?: InAppMessageButton;
}
