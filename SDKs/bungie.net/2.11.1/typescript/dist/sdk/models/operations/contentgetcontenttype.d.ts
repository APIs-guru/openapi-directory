import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ContentGetContentTypePathParams extends SpeakeasyBase {
    type: string;
}
export declare class ContentGetContentTypeRequest extends SpeakeasyBase {
    pathParams: ContentGetContentTypePathParams;
}
export declare class ContentGetContentTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
