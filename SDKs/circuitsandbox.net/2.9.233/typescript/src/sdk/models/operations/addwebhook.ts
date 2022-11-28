import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddWebHookRequestBodyFilterEnum {
    ConversationCreate = "CONVERSATION.CREATE",
    ConversationUpdate = "CONVERSATION.UPDATE",
    ConversationAddItem = "CONVERSATION.ADD_ITEM",
    ConversationUpdateItem = "CONVERSATION.UPDATE_ITEM",
    UserIncomingCall = "USER.INCOMING_CALL",
    UserUserUpdated = "USER.USER_UPDATED",
    UserUserSettingUpdated = "USER.USER_SETTING_UPDATED",
    UserSubmitFormData = "USER.SUBMIT_FORM_DATA"
}


export class AddWebHookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=filter;" })
  filter: AddWebHookRequestBodyFilterEnum[];

  @SpeakeasyMetadata({ data: "form, name=url;" })
  url: string;
}


export class AddWebHookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddWebHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddWebHookRequestBody;

  @SpeakeasyMetadata()
  security: AddWebHookSecurity;
}


export class AddWebHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webHook?: any;
}
