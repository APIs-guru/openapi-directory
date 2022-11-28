import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProjectForWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare class CreateProjectForWorkspaceQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateProjectForWorkspaceRequestBodyInput extends SpeakeasyBase {
    data?: shared.ProjectRequestInput;
}
export declare class CreateProjectForWorkspace201ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectResponse;
}
export declare class CreateProjectForWorkspaceRequest extends SpeakeasyBase {
    pathParams: CreateProjectForWorkspacePathParams;
    queryParams: CreateProjectForWorkspaceQueryParams;
    request: CreateProjectForWorkspaceRequestBodyInput;
}
export declare class CreateProjectForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createProjectForWorkspace201ApplicationJsonObject?: CreateProjectForWorkspace201ApplicationJson;
}
