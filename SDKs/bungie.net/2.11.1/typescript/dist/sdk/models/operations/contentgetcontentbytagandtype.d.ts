import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContentGetContentByTagAndTypePathParams extends SpeakeasyBase {
    locale: string;
    tag: string;
    type: string;
}
export declare class ContentGetContentByTagAndTypeQueryParams extends SpeakeasyBase {
    head?: boolean;
}
export declare class ContentGetContentByTagAndTypeRequest extends SpeakeasyBase {
    pathParams: ContentGetContentByTagAndTypePathParams;
    queryParams: ContentGetContentByTagAndTypeQueryParams;
}
export declare class ContentGetContentByTagAndTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
