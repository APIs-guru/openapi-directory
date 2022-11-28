import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTagForWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare class CreateTagForWorkspaceQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateTagForWorkspaceRequestBodyInput extends SpeakeasyBase {
    data?: shared.TagResponseInput;
}
export declare class CreateTagForWorkspace201ApplicationJson extends SpeakeasyBase {
    data?: shared.TagResponse;
}
export declare class CreateTagForWorkspaceRequest extends SpeakeasyBase {
    pathParams: CreateTagForWorkspacePathParams;
    queryParams: CreateTagForWorkspaceQueryParams;
    request: CreateTagForWorkspaceRequestBodyInput;
}
export declare class CreateTagForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createTagForWorkspace201ApplicationJsonObject?: CreateTagForWorkspace201ApplicationJson;
}
