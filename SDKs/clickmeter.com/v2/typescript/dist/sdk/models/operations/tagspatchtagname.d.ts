import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagsPatchTagNamePathParams extends SpeakeasyBase {
    tagId: number;
}
export declare class TagsPatchTagNameRequests extends SpeakeasyBase {
    apiCoreRequestsGenericTextPatch?: shared.ApiCoreRequestsGenericTextPatch;
    apiCoreRequestsGenericTextPatch1?: shared.ApiCoreRequestsGenericTextPatch;
    apiCoreRequestsGenericTextPatch2?: shared.ApiCoreRequestsGenericTextPatch;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class TagsPatchTagNameRequest extends SpeakeasyBase {
    pathParams: TagsPatchTagNamePathParams;
    request: TagsPatchTagNameRequests;
}
export declare class TagsPatchTagNameResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
