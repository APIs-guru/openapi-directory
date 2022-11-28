import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Serp200ApplicationJson extends SpeakeasyBase {
    position?: number;
    query?: string;
    searchedResults?: number;
    website?: string;
}
export declare class SerpRequest extends SpeakeasyBase {
    request: shared.SerpData;
}
export declare class SerpResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    serp200ApplicationJsonObject?: Serp200ApplicationJson;
}
