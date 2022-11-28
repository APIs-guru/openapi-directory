import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PushNotificationTemplateResponse } from "./pushnotificationtemplateresponse";



export class GetPushTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PushNotificationTemplateResponse" })
  pushNotificationTemplateResponse: PushNotificationTemplateResponse;
}
