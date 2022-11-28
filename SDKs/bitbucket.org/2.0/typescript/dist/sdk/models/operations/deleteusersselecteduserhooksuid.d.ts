import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUsersSelectedUserHooksUidPathParams extends SpeakeasyBase {
    selectedUser: string;
    uid: string;
}
export declare class DeleteUsersSelectedUserHooksUidSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteUsersSelectedUserHooksUidRequest extends SpeakeasyBase {
    pathParams: DeleteUsersSelectedUserHooksUidPathParams;
    security: DeleteUsersSelectedUserHooksUidSecurity;
}
export declare class DeleteUsersSelectedUserHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
