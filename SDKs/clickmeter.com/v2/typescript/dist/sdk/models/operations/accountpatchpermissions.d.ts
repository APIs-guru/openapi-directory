import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AccountPatchPermissionsTypeEnum {
    Datapoint = "datapoint",
    Group = "group"
}
export declare class AccountPatchPermissionsPathParams extends SpeakeasyBase {
    guestId: number;
    type: AccountPatchPermissionsTypeEnum;
}
export declare class AccountPatchPermissionsRequests extends SpeakeasyBase {
    apiCoreRequestsPermissionPatchRequest?: shared.ApiCoreRequestsPermissionPatchRequest;
    apiCoreRequestsPermissionPatchRequest1?: shared.ApiCoreRequestsPermissionPatchRequest;
    apiCoreRequestsPermissionPatchRequest2?: shared.ApiCoreRequestsPermissionPatchRequest;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class AccountPatchPermissionsRequest extends SpeakeasyBase {
    pathParams: AccountPatchPermissionsPathParams;
    request: AccountPatchPermissionsRequests;
}
export declare class AccountPatchPermissionsResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
