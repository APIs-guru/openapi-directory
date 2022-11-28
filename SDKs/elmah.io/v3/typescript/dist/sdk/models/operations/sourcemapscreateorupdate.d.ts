import { SpeakeasyBase } from "../../../internal/utils";
export declare class SourceMapsCreateOrUpdatePathParams extends SpeakeasyBase {
    logId: string;
}
export declare class SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript extends SpeakeasyBase {
    minifiedJavaScript: string;
    content: Uint8Array;
}
export declare class SourceMapsCreateOrUpdateRequestBodySourceMap extends SpeakeasyBase {
    sourceMap: string;
    content: Uint8Array;
}
export declare class SourceMapsCreateOrUpdateRequestBody extends SpeakeasyBase {
    minifiedJavaScript: SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript;
    path: string;
    sourceMap: SourceMapsCreateOrUpdateRequestBodySourceMap;
}
export declare class SourceMapsCreateOrUpdateRequest extends SpeakeasyBase {
    pathParams: SourceMapsCreateOrUpdatePathParams;
    request: SourceMapsCreateOrUpdateRequestBody;
}
export declare class SourceMapsCreateOrUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
