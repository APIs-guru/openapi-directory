import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddFollowersForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class AddFollowersForProjectQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddFollowersForProjectRequestBody extends SpeakeasyBase {
    data?: shared.AddFollowersRequest;
}
export declare class AddFollowersForProject200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class AddFollowersForProjectRequest extends SpeakeasyBase {
    pathParams: AddFollowersForProjectPathParams;
    queryParams: AddFollowersForProjectQueryParams;
    request: AddFollowersForProjectRequestBody;
}
export declare class AddFollowersForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addFollowersForProject200ApplicationJsonObject?: AddFollowersForProject200ApplicationJson;
}
