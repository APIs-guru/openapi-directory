import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePresenceWebHookPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdatePresenceWebHookRequestBody extends SpeakeasyBase {
    url?: string;
    userIds?: string[];
}
export declare class UpdatePresenceWebHookSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UpdatePresenceWebHookRequest extends SpeakeasyBase {
    pathParams: UpdatePresenceWebHookPathParams;
    request?: UpdatePresenceWebHookRequestBody;
    security: UpdatePresenceWebHookSecurity;
}
export declare class UpdatePresenceWebHookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    webHook?: any;
}
