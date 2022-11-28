import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddWebHookRequestBodyFilterEnum {
    ConversationCreate = "CONVERSATION.CREATE",
    ConversationUpdate = "CONVERSATION.UPDATE",
    ConversationAddItem = "CONVERSATION.ADD_ITEM",
    ConversationUpdateItem = "CONVERSATION.UPDATE_ITEM",
    UserIncomingCall = "USER.INCOMING_CALL",
    UserUserUpdated = "USER.USER_UPDATED",
    UserUserSettingUpdated = "USER.USER_SETTING_UPDATED",
    UserSubmitFormData = "USER.SUBMIT_FORM_DATA"
}
export declare class AddWebHookRequestBody extends SpeakeasyBase {
    filter: AddWebHookRequestBodyFilterEnum[];
    url: string;
}
export declare class AddWebHookSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class AddWebHookRequest extends SpeakeasyBase {
    request: AddWebHookRequestBody;
    security: AddWebHookSecurity;
}
export declare class AddWebHookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    webHook?: any;
}
