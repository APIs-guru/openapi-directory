import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataPointsPatchNotesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DataPointsPatchNotesRequests extends SpeakeasyBase {
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


export class DataPointsPatchNotesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataPointsPatchNotesPathParams;

  @Metadata()
  request: DataPointsPatchNotesRequests;
}


export class DataPointsPatchNotesResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
