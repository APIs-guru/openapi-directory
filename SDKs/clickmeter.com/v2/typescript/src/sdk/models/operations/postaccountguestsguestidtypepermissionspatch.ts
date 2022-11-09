import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostAccountGuestsGuestIdTypePermissionsPatchTypeEnum {
    Datapoint = "datapoint"
,    Group = "group"
}


export class PostAccountGuestsGuestIdTypePermissionsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=guestId" })
  guestId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: PostAccountGuestsGuestIdTypePermissionsPatchTypeEnum;
}


export class PostAccountGuestsGuestIdTypePermissionsPatchRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiCoreRequestsPermissionPatchRequest?: shared.ApiCoreRequestsPermissionPatchRequest;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreRequestsPermissionPatchRequest1?: shared.ApiCoreRequestsPermissionPatchRequest;

  @Metadata({ data: "request, media_type=text/json" })
  apiCoreRequestsPermissionPatchRequest2?: shared.ApiCoreRequestsPermissionPatchRequest;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PostAccountGuestsGuestIdTypePermissionsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAccountGuestsGuestIdTypePermissionsPatchPathParams;

  @Metadata()
  request: PostAccountGuestsGuestIdTypePermissionsPatchRequests;
}


export class PostAccountGuestsGuestIdTypePermissionsPatchResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
