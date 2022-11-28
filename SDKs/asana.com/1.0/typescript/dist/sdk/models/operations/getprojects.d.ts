import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectsQueryParams extends SpeakeasyBase {
    archived?: boolean;
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    team?: string;
    workspace?: string;
}
export declare class GetProjects200ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectCompact[];
}
export declare class GetProjectsRequest extends SpeakeasyBase {
    queryParams: GetProjectsQueryParams;
}
export declare class GetProjectsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getProjects200ApplicationJsonObject?: GetProjects200ApplicationJson;
}
