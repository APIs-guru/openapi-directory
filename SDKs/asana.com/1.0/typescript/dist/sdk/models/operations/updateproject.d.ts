import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class UpdateProjectQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class UpdateProjectRequestBodyInput extends SpeakeasyBase {
    data?: shared.ProjectRequestInput;
}
export declare class UpdateProject200ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectResponse;
}
export declare class UpdateProjectRequest extends SpeakeasyBase {
    pathParams: UpdateProjectPathParams;
    queryParams: UpdateProjectQueryParams;
    request: UpdateProjectRequestBodyInput;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    updateProject200ApplicationJsonObject?: UpdateProject200ApplicationJson;
}
