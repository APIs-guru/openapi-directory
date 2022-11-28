import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostContentproSimilarTextRequestBody extends SpeakeasyBase {
    text: string;
}
export declare class PostContentproSimilarText200ApplicationJsonData extends SpeakeasyBase {
    article?: shared.Article;
    company?: shared.ContentProCompany;
    snippets?: shared.ContentProSnippets;
}
export declare class PostContentproSimilarText200ApplicationJson extends SpeakeasyBase {
    callsPerMonth?: string;
    countRemaining?: string;
    data?: PostContentproSimilarText200ApplicationJsonData[];
    renewalDate?: string;
}
export declare class PostContentproSimilarTextRequest extends SpeakeasyBase {
    request: PostContentproSimilarTextRequestBody;
}
export declare class PostContentproSimilarTextResponse extends SpeakeasyBase {
    contentType: string;
    postContentproSimilarText200ApplicationJsonObject?: PostContentproSimilarText200ApplicationJson;
    statusCode: number;
}
