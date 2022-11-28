import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspaceMembershipPathParams extends SpeakeasyBase {
    workspaceMembershipGid: string;
}
export declare class GetWorkspaceMembershipQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetWorkspaceMembership200ApplicationJson extends SpeakeasyBase {
    data?: shared.WorkspaceMembershipResponse;
}
export declare class GetWorkspaceMembershipRequest extends SpeakeasyBase {
    pathParams: GetWorkspaceMembershipPathParams;
    queryParams: GetWorkspaceMembershipQueryParams;
}
export declare class GetWorkspaceMembershipResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getWorkspaceMembership200ApplicationJsonObject?: GetWorkspaceMembership200ApplicationJson;
}
