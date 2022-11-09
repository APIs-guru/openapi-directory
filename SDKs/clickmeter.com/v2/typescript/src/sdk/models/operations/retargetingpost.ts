import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetargetingPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RetargetingPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiCoreDtoRetargetingRetargetingScript?: shared.ApiCoreDtoRetargetingRetargetingScript;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoRetargetingRetargetingScript1?: shared.ApiCoreDtoRetargetingRetargetingScript;

  @Metadata({ data: "request, media_type=text/json" })
  apiCoreDtoRetargetingRetargetingScript2?: shared.ApiCoreDtoRetargetingRetargetingScript;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class RetargetingPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetargetingPostPathParams;

  @Metadata()
  request: RetargetingPostRequests;
}


export class RetargetingPostResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
