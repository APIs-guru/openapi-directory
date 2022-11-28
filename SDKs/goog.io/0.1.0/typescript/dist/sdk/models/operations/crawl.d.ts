import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CrawlPathParams extends SpeakeasyBase {
    query: string;
}
export declare class Crawl200ApplicationJson extends SpeakeasyBase {
    answer?: string;
    results?: string[];
    total?: string;
}
export declare class CrawlRequest extends SpeakeasyBase {
    pathParams: CrawlPathParams;
}
export declare class CrawlResponse extends SpeakeasyBase {
    contentType: string;
    crawl200ApplicationJsonObject?: Crawl200ApplicationJson;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
