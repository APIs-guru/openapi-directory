import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectStatusPathParams extends SpeakeasyBase {
    projectStatusGid: string;
}
export declare class GetProjectStatusQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetProjectStatus200ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectStatusResponse;
}
export declare class GetProjectStatusRequest extends SpeakeasyBase {
    pathParams: GetProjectStatusPathParams;
    queryParams: GetProjectStatusQueryParams;
}
export declare class GetProjectStatusResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getProjectStatus200ApplicationJsonObject?: GetProjectStatus200ApplicationJson;
}
