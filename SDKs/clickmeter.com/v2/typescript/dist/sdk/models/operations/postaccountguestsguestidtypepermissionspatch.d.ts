import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostAccountGuestsGuestIdTypePermissionsPatchTypeEnum {
    Datapoint = "datapoint",
    Group = "group"
}
export declare class PostAccountGuestsGuestIdTypePermissionsPatchPathParams extends SpeakeasyBase {
    guestId: number;
    type: PostAccountGuestsGuestIdTypePermissionsPatchTypeEnum;
}
export declare class PostAccountGuestsGuestIdTypePermissionsPatchRequests extends SpeakeasyBase {
    apiCoreRequestsPermissionPatchRequest?: shared.ApiCoreRequestsPermissionPatchRequest;
    apiCoreRequestsPermissionPatchRequest1?: shared.ApiCoreRequestsPermissionPatchRequest;
    apiCoreRequestsPermissionPatchRequest2?: shared.ApiCoreRequestsPermissionPatchRequest;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class PostAccountGuestsGuestIdTypePermissionsPatchRequest extends SpeakeasyBase {
    pathParams: PostAccountGuestsGuestIdTypePermissionsPatchPathParams;
    request: PostAccountGuestsGuestIdTypePermissionsPatchRequests;
}
export declare class PostAccountGuestsGuestIdTypePermissionsPatchResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
