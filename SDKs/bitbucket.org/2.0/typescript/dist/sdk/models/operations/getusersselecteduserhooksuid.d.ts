import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersSelectedUserHooksUidPathParams extends SpeakeasyBase {
    selectedUser: string;
    uid: string;
}
export declare class GetUsersSelectedUserHooksUidSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetUsersSelectedUserHooksUidRequest extends SpeakeasyBase {
    pathParams: GetUsersSelectedUserHooksUidPathParams;
    security: GetUsersSelectedUserHooksUidSecurity;
}
export declare class GetUsersSelectedUserHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    webhookSubscription?: Map<string, any>;
}
