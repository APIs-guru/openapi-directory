import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectMembershipPathParams extends SpeakeasyBase {
    projectMembershipGid: string;
}
export declare class GetProjectMembershipQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetProjectMembership200ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectMembershipResponse;
}
export declare class GetProjectMembershipRequest extends SpeakeasyBase {
    pathParams: GetProjectMembershipPathParams;
    queryParams: GetProjectMembershipQueryParams;
}
export declare class GetProjectMembershipResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getProjectMembership200ApplicationJsonObject?: GetProjectMembership200ApplicationJson;
}
