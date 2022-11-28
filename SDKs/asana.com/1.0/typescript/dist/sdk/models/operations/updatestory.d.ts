import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateStoryPathParams extends SpeakeasyBase {
    storyGid: string;
}
export declare class UpdateStoryQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class UpdateStoryRequestBodyInput extends SpeakeasyBase {
    data?: shared.StoryRequestInput;
}
export declare class UpdateStory200ApplicationJson extends SpeakeasyBase {
    data?: shared.StoryResponse;
}
export declare class UpdateStoryRequest extends SpeakeasyBase {
    pathParams: UpdateStoryPathParams;
    queryParams: UpdateStoryQueryParams;
    request: UpdateStoryRequestBodyInput;
}
export declare class UpdateStoryResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    updateStory200ApplicationJsonObject?: UpdateStory200ApplicationJson;
}
