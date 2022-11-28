import { SpeakeasyBase } from "../../../internal/utils";
export declare class FilterFileDataStoppingsPathParams extends SpeakeasyBase {
    type: string;
}
export declare class FilterFileDataStoppingsRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class FilterFileDataStoppingsRequestBody extends SpeakeasyBase {
    file?: FilterFileDataStoppingsRequestBodyFile;
}
export declare class FilterFileDataStoppingsRequest extends SpeakeasyBase {
    pathParams: FilterFileDataStoppingsPathParams;
    request: FilterFileDataStoppingsRequestBody;
}
export declare class FilterFileDataStoppingsResponse extends SpeakeasyBase {
    contentType: string;
    exudeResponseBean?: any;
    statusCode: number;
}
