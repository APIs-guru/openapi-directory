import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteStoryPathParams extends SpeakeasyBase {
    storyGid: string;
}
export declare class DeleteStoryQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class DeleteStory200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class DeleteStoryRequest extends SpeakeasyBase {
    pathParams: DeleteStoryPathParams;
    queryParams: DeleteStoryQueryParams;
}
export declare class DeleteStoryResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    deleteStory200ApplicationJsonObject?: DeleteStory200ApplicationJson;
}
