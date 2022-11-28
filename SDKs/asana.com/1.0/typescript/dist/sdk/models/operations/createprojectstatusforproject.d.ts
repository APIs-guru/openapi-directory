import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProjectStatusForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class CreateProjectStatusForProjectQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateProjectStatusForProjectRequestBodyInput extends SpeakeasyBase {
    data?: shared.ProjectStatusRequestInput;
}
export declare class CreateProjectStatusForProject201ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectStatusResponse;
}
export declare class CreateProjectStatusForProjectRequest extends SpeakeasyBase {
    pathParams: CreateProjectStatusForProjectPathParams;
    queryParams: CreateProjectStatusForProjectQueryParams;
    request: CreateProjectStatusForProjectRequestBodyInput;
}
export declare class CreateProjectStatusForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createProjectStatusForProject201ApplicationJsonObject?: CreateProjectStatusForProject201ApplicationJson;
}
