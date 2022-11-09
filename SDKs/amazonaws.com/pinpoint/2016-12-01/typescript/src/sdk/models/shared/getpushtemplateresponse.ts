import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PushNotificationTemplateResponse } from "./pushnotificationtemplateresponse";


export class GetPushTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PushNotificationTemplateResponse" })
  pushNotificationTemplateResponse: PushNotificationTemplateResponse;
}
