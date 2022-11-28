import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateWebHookPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum UpdateWebHookRequestBodyFilterEnum {
    ConversationCreate = "CONVERSATION.CREATE",
    ConversationUpdate = "CONVERSATION.UPDATE",
    ConversationAddItem = "CONVERSATION.ADD_ITEM",
    ConversationUpdateItem = "CONVERSATION.UPDATE_ITEM",
    UserIncomingCall = "USER.INCOMING_CALL",
    UserUserUpdated = "USER.USER_UPDATED",
    UserUserSettingUpdated = "USER.USER_SETTING_UPDATED",
    UserSubmitFormData = "USER.SUBMIT_FORM_DATA"
}
export declare class UpdateWebHookRequestBody extends SpeakeasyBase {
    filter?: UpdateWebHookRequestBodyFilterEnum[];
    url?: string;
}
export declare class UpdateWebHookSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UpdateWebHookRequest extends SpeakeasyBase {
    pathParams: UpdateWebHookPathParams;
    request?: UpdateWebHookRequestBody;
    security: UpdateWebHookSecurity;
}
export declare class UpdateWebHookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    webHook?: any;
}
