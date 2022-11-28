import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTagPathParams extends SpeakeasyBase {
    tagGid: string;
}
export declare class UpdateTagQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class UpdateTag200ApplicationJson extends SpeakeasyBase {
    data?: shared.TagResponse;
}
export declare class UpdateTagRequest extends SpeakeasyBase {
    pathParams: UpdateTagPathParams;
    queryParams: UpdateTagQueryParams;
}
export declare class UpdateTagResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    updateTag200ApplicationJsonObject?: UpdateTag200ApplicationJson;
}
