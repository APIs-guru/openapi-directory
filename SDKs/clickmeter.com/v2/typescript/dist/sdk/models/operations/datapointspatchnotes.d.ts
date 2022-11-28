import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataPointsPatchNotesPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DataPointsPatchNotesRequests extends SpeakeasyBase {
    apiCoreRequestsGenericTextPatch?: shared.ApiCoreRequestsGenericTextPatch;
    apiCoreRequestsGenericTextPatch1?: shared.ApiCoreRequestsGenericTextPatch;
    apiCoreRequestsGenericTextPatch2?: shared.ApiCoreRequestsGenericTextPatch;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class DataPointsPatchNotesRequest extends SpeakeasyBase {
    pathParams: DataPointsPatchNotesPathParams;
    request: DataPointsPatchNotesRequests;
}
export declare class DataPointsPatchNotesResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
