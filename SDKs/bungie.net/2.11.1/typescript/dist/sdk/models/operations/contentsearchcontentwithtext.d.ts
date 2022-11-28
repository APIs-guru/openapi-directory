import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContentSearchContentWithTextPathParams extends SpeakeasyBase {
    locale: string;
}
export declare class ContentSearchContentWithTextQueryParams extends SpeakeasyBase {
    ctype?: string;
    currentpage?: number;
    head?: boolean;
    searchtext?: string;
    source?: string;
    tag?: string;
}
export declare class ContentSearchContentWithTextRequest extends SpeakeasyBase {
    pathParams: ContentSearchContentWithTextPathParams;
    queryParams: ContentSearchContentWithTextQueryParams;
}
export declare class ContentSearchContentWithTextResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
