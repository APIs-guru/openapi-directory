import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddWebHookRequestBodyFilterEnum {
    ConversationCreate = "CONVERSATION.CREATE"
,    ConversationUpdate = "CONVERSATION.UPDATE"
,    ConversationAddItem = "CONVERSATION.ADD_ITEM"
,    ConversationUpdateItem = "CONVERSATION.UPDATE_ITEM"
,    UserIncomingCall = "USER.INCOMING_CALL"
,    UserUserUpdated = "USER.USER_UPDATED"
,    UserUserSettingUpdated = "USER.USER_SETTING_UPDATED"
,    UserSubmitFormData = "USER.SUBMIT_FORM_DATA"
}


export class AddWebHookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=filter;" })
  filter: AddWebHookRequestBodyFilterEnum[];

  @Metadata({ data: "form, name=url;" })
  url: string;
}


export class AddWebHookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddWebHookRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddWebHookRequestBody;

  @Metadata()
  security: AddWebHookSecurity;
}


export class AddWebHookResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webHook?: any;
}
