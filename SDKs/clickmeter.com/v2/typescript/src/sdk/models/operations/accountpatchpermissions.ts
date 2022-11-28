import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AccountPatchPermissionsTypeEnum {
    Datapoint = "datapoint",
    Group = "group"
}


export class AccountPatchPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guestId" })
  guestId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: AccountPatchPermissionsTypeEnum;
}


export class AccountPatchPermissionsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiCoreRequestsPermissionPatchRequest?: shared.ApiCoreRequestsPermissionPatchRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreRequestsPermissionPatchRequest1?: shared.ApiCoreRequestsPermissionPatchRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiCoreRequestsPermissionPatchRequest2?: shared.ApiCoreRequestsPermissionPatchRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AccountPatchPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountPatchPermissionsPathParams;

  @SpeakeasyMetadata()
  request: AccountPatchPermissionsRequests;
}


export class AccountPatchPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
