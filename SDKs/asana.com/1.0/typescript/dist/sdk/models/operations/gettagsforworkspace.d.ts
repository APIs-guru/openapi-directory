import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsForWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare class GetTagsForWorkspaceQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTagsForWorkspace200ApplicationJson extends SpeakeasyBase {
    data?: shared.TagCompact[];
}
export declare class GetTagsForWorkspaceRequest extends SpeakeasyBase {
    pathParams: GetTagsForWorkspacePathParams;
    queryParams: GetTagsForWorkspaceQueryParams;
}
export declare class GetTagsForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTagsForWorkspace200ApplicationJsonObject?: GetTagsForWorkspace200ApplicationJson;
}
