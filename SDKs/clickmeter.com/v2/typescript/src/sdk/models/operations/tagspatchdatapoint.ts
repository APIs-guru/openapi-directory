import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagsPatchDataPointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class TagsPatchDataPointRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiCoreRequestsPatchBody?: shared.ApiCoreRequestsPatchBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreRequestsPatchBody1?: shared.ApiCoreRequestsPatchBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiCoreRequestsPatchBody2?: shared.ApiCoreRequestsPatchBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TagsPatchDataPointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagsPatchDataPointPathParams;

  @SpeakeasyMetadata()
  request: TagsPatchDataPointRequests;
}


export class TagsPatchDataPointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
