import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversionsPatchPathParams extends SpeakeasyBase {
    conversionId: number;
}
export declare class ConversionsPatchRequests extends SpeakeasyBase {
    apiCoreRequestsConversionPatchBody?: shared.ApiCoreRequestsConversionPatchBody;
    apiCoreRequestsConversionPatchBody1?: shared.ApiCoreRequestsConversionPatchBody;
    apiCoreRequestsConversionPatchBody2?: shared.ApiCoreRequestsConversionPatchBody;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class ConversionsPatchRequest extends SpeakeasyBase {
    pathParams: ConversionsPatchPathParams;
    request: ConversionsPatchRequests;
}
export declare class ConversionsPatchResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
