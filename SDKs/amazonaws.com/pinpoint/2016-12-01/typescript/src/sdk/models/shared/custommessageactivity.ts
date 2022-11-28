import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointTypesElementEnum } from "./endpointtypeselementenum";
import { JourneyCustomMessage } from "./journeycustommessage";



// CustomMessageActivity
/** 
 * The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.
**/
export class CustomMessageActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryUri" })
  deliveryUri?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointTypes" })
  endpointTypes?: EndpointTypesElementEnum[];

  @SpeakeasyMetadata({ data: "json, name=MessageConfig" })
  messageConfig?: JourneyCustomMessage;

  @SpeakeasyMetadata({ data: "json, name=NextActivity" })
  nextActivity?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateName" })
  templateName?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateVersion" })
  templateVersion?: string;
}
