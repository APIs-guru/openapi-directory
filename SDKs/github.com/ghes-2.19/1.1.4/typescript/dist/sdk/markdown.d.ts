import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Markdown {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * markdownRender - Render a Markdown document
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/markdown#render-a-markdown-document - API method documentation
    **/
    markdownRender(req: operations.MarkdownRenderRequest, config?: AxiosRequestConfig): Promise<operations.MarkdownRenderResponse>;
    /**
     * markdownRenderRaw - Render a Markdown document in raw mode
     *
     * You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/markdown#render-a-markdown-document-in-raw-mode - API method documentation
    **/
    markdownRenderRaw(req: operations.MarkdownRenderRawRequest, config?: AxiosRequestConfig): Promise<operations.MarkdownRenderRawResponse>;
}
