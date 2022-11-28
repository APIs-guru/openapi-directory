import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversionsPatchNotesPathParams extends SpeakeasyBase {
    conversionId: number;
}
export declare class ConversionsPatchNotesRequests extends SpeakeasyBase {
    apiCoreRequestsGenericTextPatch?: shared.ApiCoreRequestsGenericTextPatch;
    apiCoreRequestsGenericTextPatch1?: shared.ApiCoreRequestsGenericTextPatch;
    apiCoreRequestsGenericTextPatch2?: shared.ApiCoreRequestsGenericTextPatch;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class ConversionsPatchNotesRequest extends SpeakeasyBase {
    pathParams: ConversionsPatchNotesPathParams;
    request: ConversionsPatchNotesRequests;
}
export declare class ConversionsPatchNotesResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
