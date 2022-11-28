import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoryPathParams extends SpeakeasyBase {
    storyGid: string;
}
export declare class GetStoryQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetStory200ApplicationJson extends SpeakeasyBase {
    data?: shared.StoryResponse;
}
export declare class GetStoryRequest extends SpeakeasyBase {
    pathParams: GetStoryPathParams;
    queryParams: GetStoryQueryParams;
}
export declare class GetStoryResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getStory200ApplicationJsonObject?: GetStory200ApplicationJson;
}
