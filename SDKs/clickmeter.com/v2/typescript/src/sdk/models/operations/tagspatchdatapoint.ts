import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagsPatchDataPointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class TagsPatchDataPointRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiCoreRequestsPatchBody?: shared.ApiCoreRequestsPatchBody;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreRequestsPatchBody1?: shared.ApiCoreRequestsPatchBody;

  @Metadata({ data: "request, media_type=text/json" })
  apiCoreRequestsPatchBody2?: shared.ApiCoreRequestsPatchBody;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TagsPatchDataPointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagsPatchDataPointPathParams;

  @Metadata()
  request: TagsPatchDataPointRequests;
}


export class TagsPatchDataPointResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
