import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchPathParams extends SpeakeasyBase {
    query: string;
}
export declare class Search200ApplicationJsonResults extends SpeakeasyBase {
    description?: string;
    link?: string;
    title?: string;
}
/**
 * results
**/
export declare class Search200ApplicationJson extends SpeakeasyBase {
    answer?: string;
    results?: Search200ApplicationJsonResults[];
    total?: string;
}
export declare class SearchRequest extends SpeakeasyBase {
    pathParams: SearchPathParams;
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    search200ApplicationJsonObject?: Search200ApplicationJson;
    statusCode: number;
}
