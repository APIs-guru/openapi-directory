import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateWebHookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum UpdateWebHookRequestBodyFilterEnum {
    ConversationCreate = "CONVERSATION.CREATE",
    ConversationUpdate = "CONVERSATION.UPDATE",
    ConversationAddItem = "CONVERSATION.ADD_ITEM",
    ConversationUpdateItem = "CONVERSATION.UPDATE_ITEM",
    UserIncomingCall = "USER.INCOMING_CALL",
    UserUserUpdated = "USER.USER_UPDATED",
    UserUserSettingUpdated = "USER.USER_SETTING_UPDATED",
    UserSubmitFormData = "USER.SUBMIT_FORM_DATA"
}


export class UpdateWebHookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=filter;" })
  filter?: UpdateWebHookRequestBodyFilterEnum[];

  @SpeakeasyMetadata({ data: "form, name=url;" })
  url?: string;
}


export class UpdateWebHookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateWebHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateWebHookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateWebHookRequestBody;

  @SpeakeasyMetadata()
  security: UpdateWebHookSecurity;
}


export class UpdateWebHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webHook?: any;
}
