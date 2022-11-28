import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUsernameMembersPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetUsersUsernameMembersSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetUsersUsernameMembersRequest extends SpeakeasyBase {
    pathParams: GetUsersUsernameMembersPathParams;
    security: GetUsersUsernameMembersSecurity;
}
export declare class GetUsersUsernameMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    user?: Map<string, any>;
}
