import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class GetProjectQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetProject200ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectResponse;
}
export declare class GetProjectRequest extends SpeakeasyBase {
    pathParams: GetProjectPathParams;
    queryParams: GetProjectQueryParams;
}
export declare class GetProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getProject200ApplicationJsonObject?: GetProject200ApplicationJson;
}
