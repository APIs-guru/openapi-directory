import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProjectQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateProjectRequestBodyInput extends SpeakeasyBase {
    data?: shared.ProjectRequestInput;
}
export declare class CreateProject201ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectResponse;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    queryParams: CreateProjectQueryParams;
    request: CreateProjectRequestBodyInput;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createProject201ApplicationJsonObject?: CreateProject201ApplicationJson;
}
