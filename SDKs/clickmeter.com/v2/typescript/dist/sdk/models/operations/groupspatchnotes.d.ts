import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsPatchNotesPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GroupsPatchNotesRequests extends SpeakeasyBase {
    apiCoreRequestsGenericTextPatch?: shared.ApiCoreRequestsGenericTextPatch;
    apiCoreRequestsGenericTextPatch1?: shared.ApiCoreRequestsGenericTextPatch;
    apiCoreRequestsGenericTextPatch2?: shared.ApiCoreRequestsGenericTextPatch;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class GroupsPatchNotesRequest extends SpeakeasyBase {
    pathParams: GroupsPatchNotesPathParams;
    request: GroupsPatchNotesRequests;
}
export declare class GroupsPatchNotesResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
