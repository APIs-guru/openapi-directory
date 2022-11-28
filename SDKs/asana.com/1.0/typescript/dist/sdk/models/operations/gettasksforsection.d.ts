import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTasksForSectionPathParams extends SpeakeasyBase {
    sectionGid: string;
}
export declare class GetTasksForSectionQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTasksForSection200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskCompact[];
}
export declare class GetTasksForSectionRequest extends SpeakeasyBase {
    pathParams: GetTasksForSectionPathParams;
    queryParams: GetTasksForSectionQueryParams;
}
export declare class GetTasksForSectionResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTasksForSection200ApplicationJsonObject?: GetTasksForSection200ApplicationJson;
}
