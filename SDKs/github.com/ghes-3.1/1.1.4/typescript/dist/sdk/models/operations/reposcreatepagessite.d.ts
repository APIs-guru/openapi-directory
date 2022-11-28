import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreatePagesSitePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum ReposCreatePagesSiteRequestBodySourcePathEnum {
    Root = "/",
    RootDocs = "/docs"
}
/**
 * The source branch and directory used to publish your Pages site.
**/
export declare class ReposCreatePagesSiteRequestBodySource extends SpeakeasyBase {
    branch: string;
    path?: ReposCreatePagesSiteRequestBodySourcePathEnum;
}
/**
 * The source branch and directory used to publish your Pages site.
**/
export declare class ReposCreatePagesSiteRequestBody extends SpeakeasyBase {
    source: ReposCreatePagesSiteRequestBodySource;
}
export declare class ReposCreatePagesSite415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposCreatePagesSiteRequest extends SpeakeasyBase {
    pathParams: ReposCreatePagesSitePathParams;
    request?: ReposCreatePagesSiteRequestBody;
}
export declare class ReposCreatePagesSiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    page?: shared.Page;
    reposCreatePagesSite415ApplicationJsonObject?: ReposCreatePagesSite415ApplicationJson;
    validationError?: shared.ValidationError;
}
