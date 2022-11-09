import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointTypesElementEnum } from "./endpointtypeselementenum";
import { JourneyCustomMessage } from "./journeycustommessage";


// CustomMessageActivity
/** 
 * The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.
**/
export class CustomMessageActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryUri" })
  deliveryUri?: string;

  @Metadata({ data: "json, name=EndpointTypes" })
  endpointTypes?: EndpointTypesElementEnum[];

  @Metadata({ data: "json, name=MessageConfig" })
  messageConfig?: JourneyCustomMessage;

  @Metadata({ data: "json, name=NextActivity" })
  nextActivity?: string;

  @Metadata({ data: "json, name=TemplateName" })
  templateName?: string;

  @Metadata({ data: "json, name=TemplateVersion" })
  templateVersion?: string;
}
