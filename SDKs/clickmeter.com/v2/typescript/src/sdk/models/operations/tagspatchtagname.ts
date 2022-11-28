import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagsPatchTagNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class TagsPatchTagNameRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiCoreRequestsGenericTextPatch?: shared.ApiCoreRequestsGenericTextPatch;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreRequestsGenericTextPatch1?: shared.ApiCoreRequestsGenericTextPatch;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiCoreRequestsGenericTextPatch2?: shared.ApiCoreRequestsGenericTextPatch;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TagsPatchTagNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagsPatchTagNamePathParams;

  @SpeakeasyMetadata()
  request: TagsPatchTagNameRequests;
}


export class TagsPatchTagNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
