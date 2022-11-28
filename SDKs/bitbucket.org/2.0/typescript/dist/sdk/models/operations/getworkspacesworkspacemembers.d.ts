import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesWorkspaceMembersPathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class GetWorkspacesWorkspaceMembersSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetWorkspacesWorkspaceMembersRequest extends SpeakeasyBase {
    pathParams: GetWorkspacesWorkspaceMembersPathParams;
    security: GetWorkspacesWorkspaceMembersSecurity;
}
export declare class GetWorkspacesWorkspaceMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedWorkspaceMemberships?: shared.PaginatedWorkspaceMemberships;
}
