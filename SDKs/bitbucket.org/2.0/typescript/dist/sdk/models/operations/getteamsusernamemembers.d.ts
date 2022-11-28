import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsUsernameMembersPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetTeamsUsernameMembersSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetTeamsUsernameMembersRequest extends SpeakeasyBase {
    pathParams: GetTeamsUsernameMembersPathParams;
    security: GetTeamsUsernameMembersSecurity;
}
export declare class GetTeamsUsernameMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    user?: Map<string, any>;
}
