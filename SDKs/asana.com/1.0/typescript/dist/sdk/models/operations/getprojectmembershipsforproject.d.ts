import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectMembershipsForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class GetProjectMembershipsForProjectQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    user?: string;
}
export declare class GetProjectMembershipsForProject200ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectMembershipCompact[];
}
export declare class GetProjectMembershipsForProjectRequest extends SpeakeasyBase {
    pathParams: GetProjectMembershipsForProjectPathParams;
    queryParams: GetProjectMembershipsForProjectQueryParams;
}
export declare class GetProjectMembershipsForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getProjectMembershipsForProject200ApplicationJsonObject?: GetProjectMembershipsForProject200ApplicationJson;
}
