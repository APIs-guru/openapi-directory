import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagPathParams extends SpeakeasyBase {
    tagGid: string;
}
export declare class GetTagQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTag200ApplicationJson extends SpeakeasyBase {
    data?: shared.TagResponse;
}
export declare class GetTagRequest extends SpeakeasyBase {
    pathParams: GetTagPathParams;
    queryParams: GetTagQueryParams;
}
export declare class GetTagResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTag200ApplicationJsonObject?: GetTag200ApplicationJson;
}
