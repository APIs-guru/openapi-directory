import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ContentSearchHelpArticlesPathParams extends SpeakeasyBase {
    searchtext: string;
    size: string;
}
export declare class ContentSearchHelpArticlesRequest extends SpeakeasyBase {
    pathParams: ContentSearchHelpArticlesPathParams;
}
export declare class ContentSearchHelpArticlesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
