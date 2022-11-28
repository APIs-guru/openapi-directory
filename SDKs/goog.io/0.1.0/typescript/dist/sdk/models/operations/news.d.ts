import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NewsPathParams extends SpeakeasyBase {
    query: string;
}
export declare class News200ApplicationJsonEntries extends SpeakeasyBase {
    guidislink?: string;
    id?: string;
    link?: string;
    links?: string;
    published?: string;
    publishedParsed?: string;
    source?: string;
    subArticles?: string;
    summary?: string;
    summaryDetail?: string;
    title?: string;
    titleDetail?: string;
}
export declare class News200ApplicationJsonFeed extends SpeakeasyBase {
    generator?: string;
    generatorDetail?: string;
    language?: string;
    link?: string;
    links?: string;
    publisher?: string;
    publisherDetail?: string;
    rights?: string;
    rightsDetail?: string;
    subtitle?: string;
    subtitleDetail?: string;
    title?: string;
    updated?: string;
    updatedParsed?: string;
}
export declare class News200ApplicationJson extends SpeakeasyBase {
    entries?: News200ApplicationJsonEntries[];
    feed?: News200ApplicationJsonFeed;
}
export declare class NewsRequest extends SpeakeasyBase {
    pathParams: NewsPathParams;
}
export declare class NewsResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    news200ApplicationJsonObject?: News200ApplicationJson;
    statusCode: number;
}
