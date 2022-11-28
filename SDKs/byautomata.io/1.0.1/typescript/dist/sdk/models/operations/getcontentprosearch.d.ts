import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContentproSearchQueryParams extends SpeakeasyBase {
    terms: string;
}
export declare class GetContentproSearch200ApplicationJsonData extends SpeakeasyBase {
    article?: shared.Article;
    company?: shared.ContentProCompany;
    snippets?: shared.ContentProSnippets;
}
export declare class GetContentproSearch200ApplicationJson extends SpeakeasyBase {
    callsPerMonth?: string;
    countRemaining?: string;
    data?: GetContentproSearch200ApplicationJsonData[];
    renewalDate?: string;
}
export declare class GetContentproSearchRequest extends SpeakeasyBase {
    queryParams: GetContentproSearchQueryParams;
}
export declare class GetContentproSearchResponse extends SpeakeasyBase {
    contentType: string;
    getContentproSearch200ApplicationJsonObject?: GetContentproSearch200ApplicationJson;
    statusCode: number;
}
