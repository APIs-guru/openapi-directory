import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ContentSearchContentByTagAndTypePathParams extends SpeakeasyBase {
    locale: string;
    tag: string;
    type: string;
}
export declare class ContentSearchContentByTagAndTypeQueryParams extends SpeakeasyBase {
    currentpage?: number;
    head?: boolean;
    itemsperpage?: number;
}
export declare class ContentSearchContentByTagAndTypeRequest extends SpeakeasyBase {
    pathParams: ContentSearchContentByTagAndTypePathParams;
    queryParams: ContentSearchContentByTagAndTypeQueryParams;
}
export declare class ContentSearchContentByTagAndTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
