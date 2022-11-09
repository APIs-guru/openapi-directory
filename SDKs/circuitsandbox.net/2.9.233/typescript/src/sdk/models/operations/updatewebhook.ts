import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateWebHookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum UpdateWebHookRequestBodyFilterEnum {
    ConversationCreate = "CONVERSATION.CREATE"
,    ConversationUpdate = "CONVERSATION.UPDATE"
,    ConversationAddItem = "CONVERSATION.ADD_ITEM"
,    ConversationUpdateItem = "CONVERSATION.UPDATE_ITEM"
,    UserIncomingCall = "USER.INCOMING_CALL"
,    UserUserUpdated = "USER.USER_UPDATED"
,    UserUserSettingUpdated = "USER.USER_SETTING_UPDATED"
,    UserSubmitFormData = "USER.SUBMIT_FORM_DATA"
}


export class UpdateWebHookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=filter;" })
  filter?: UpdateWebHookRequestBodyFilterEnum[];

  @Metadata({ data: "form, name=url;" })
  url?: string;
}


export class UpdateWebHookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateWebHookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateWebHookPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateWebHookRequestBody;

  @Metadata()
  security: UpdateWebHookSecurity;
}


export class UpdateWebHookResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webHook?: any;
}
