import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUsersSelectedUserHooksUidPathParams extends SpeakeasyBase {
    selectedUser: string;
    uid: string;
}
export declare class PutUsersSelectedUserHooksUidSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutUsersSelectedUserHooksUidRequest extends SpeakeasyBase {
    pathParams: PutUsersSelectedUserHooksUidPathParams;
    security: PutUsersSelectedUserHooksUidSecurity;
}
export declare class PutUsersSelectedUserHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    webhookSubscription?: Map<string, any>;
}
