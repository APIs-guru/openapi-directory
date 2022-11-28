import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomFieldsForWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare class GetCustomFieldsForWorkspaceQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetCustomFieldsForWorkspace200ApplicationJson extends SpeakeasyBase {
    data?: shared.CustomFieldResponse[];
}
export declare class GetCustomFieldsForWorkspaceRequest extends SpeakeasyBase {
    pathParams: GetCustomFieldsForWorkspacePathParams;
    queryParams: GetCustomFieldsForWorkspaceQueryParams;
}
export declare class GetCustomFieldsForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getCustomFieldsForWorkspace200ApplicationJsonObject?: GetCustomFieldsForWorkspace200ApplicationJson;
}
