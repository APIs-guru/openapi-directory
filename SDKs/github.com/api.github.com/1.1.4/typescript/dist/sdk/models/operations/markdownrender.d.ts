import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MarkdownRenderRequestBodyModeEnum {
    Markdown = "markdown",
    Gfm = "gfm"
}
export declare class MarkdownRenderRequestBody extends SpeakeasyBase {
    context?: string;
    mode?: MarkdownRenderRequestBodyModeEnum;
    text: string;
}
export declare class MarkdownRenderRequest extends SpeakeasyBase {
    request?: MarkdownRenderRequestBody;
}
export declare class MarkdownRenderResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    markdownRender200TextHtmlString?: string;
}
