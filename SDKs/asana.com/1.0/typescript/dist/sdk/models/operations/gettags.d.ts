import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    workspace?: string;
}
export declare class GetTags200ApplicationJson extends SpeakeasyBase {
    data?: shared.TagCompact[];
}
export declare class GetTagsRequest extends SpeakeasyBase {
    queryParams: GetTagsQueryParams;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTags200ApplicationJsonObject?: GetTags200ApplicationJson;
}
