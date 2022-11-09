import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ContentGetContentByIdPathParams extends SpeakeasyBase {
    id: number;
    locale: string;
}
export declare class ContentGetContentByIdQueryParams extends SpeakeasyBase {
    head?: boolean;
}
export declare class ContentGetContentByIdRequest extends SpeakeasyBase {
    pathParams: ContentGetContentByIdPathParams;
    queryParams: ContentGetContentByIdQueryParams;
}
export declare class ContentGetContentByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
