import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSnippetsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostSnippetsRequest extends SpeakeasyBase {
    request: Map<string, any>;
    security: PostSnippetsSecurity;
}
export declare class PostSnippetsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    snippet?: Map<string, any>;
}
