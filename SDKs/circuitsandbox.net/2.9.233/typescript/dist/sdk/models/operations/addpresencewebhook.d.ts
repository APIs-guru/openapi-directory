import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddPresenceWebHookRequestBody extends SpeakeasyBase {
    url: string;
    userIds: string[];
}
export declare class AddPresenceWebHookSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class AddPresenceWebHookRequest extends SpeakeasyBase {
    request: AddPresenceWebHookRequestBody;
    security: AddPresenceWebHookSecurity;
}
export declare class AddPresenceWebHookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    webHook?: any;
}
