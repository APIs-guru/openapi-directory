import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveFollowersForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class RemoveFollowersForProjectQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveFollowersForProjectRequestBody extends SpeakeasyBase {
    data?: shared.RemoveFollowersRequest;
}
export declare class RemoveFollowersForProject200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class RemoveFollowersForProjectRequest extends SpeakeasyBase {
    pathParams: RemoveFollowersForProjectPathParams;
    queryParams: RemoveFollowersForProjectQueryParams;
    request: RemoveFollowersForProjectRequestBody;
}
export declare class RemoveFollowersForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeFollowersForProject200ApplicationJsonObject?: RemoveFollowersForProject200ApplicationJson;
}
