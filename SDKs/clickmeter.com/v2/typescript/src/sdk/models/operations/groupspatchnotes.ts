import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsPatchNotesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GroupsPatchNotesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiCoreRequestsGenericTextPatch?: shared.ApiCoreRequestsGenericTextPatch;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreRequestsGenericTextPatch1?: shared.ApiCoreRequestsGenericTextPatch;

  @Metadata({ data: "request, media_type=text/json" })
  apiCoreRequestsGenericTextPatch2?: shared.ApiCoreRequestsGenericTextPatch;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class GroupsPatchNotesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsPatchNotesPathParams;

  @Metadata()
  request: GroupsPatchNotesRequests;
}


export class GroupsPatchNotesResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
