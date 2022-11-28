import { SpeakeasyBase } from "../../../internal/utils";
export declare class MarkdownRenderRawRequests extends SpeakeasyBase {
    string?: string;
    string1?: string;
}
export declare class MarkdownRenderRawRequest extends SpeakeasyBase {
    request?: MarkdownRenderRawRequests;
}
export declare class MarkdownRenderRawResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    markdownRenderRaw200TextHtmlString?: string;
}
