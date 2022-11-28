import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetContentPathParams extends SpeakeasyBase {
    owner: string;
    path: string;
    repo: string;
}
export declare class ReposGetContentQueryParams extends SpeakeasyBase {
    ref?: string;
}
export declare class ReposGetContentRequest extends SpeakeasyBase {
    pathParams: ReposGetContentPathParams;
    queryParams: ReposGetContentQueryParams;
}
export declare class ReposGetContentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    reposGetContent200ApplicationJsonOneOf?: any;
}
