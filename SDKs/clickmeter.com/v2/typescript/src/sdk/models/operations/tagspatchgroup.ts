import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagsPatchGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class TagsPatchGroupRequests extends SpeakeasyBase {
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


export class TagsPatchGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagsPatchGroupPathParams;

  @Metadata()
  request: TagsPatchGroupRequests;
}


export class TagsPatchGroupResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
