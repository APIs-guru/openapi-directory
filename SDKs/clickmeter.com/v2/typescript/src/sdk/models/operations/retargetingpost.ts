import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetargetingPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RetargetingPostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiCoreDtoRetargetingRetargetingScript?: shared.ApiCoreDtoRetargetingRetargetingScript;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoRetargetingRetargetingScript1?: shared.ApiCoreDtoRetargetingRetargetingScript;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiCoreDtoRetargetingRetargetingScript2?: shared.ApiCoreDtoRetargetingRetargetingScript;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class RetargetingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetargetingPostPathParams;

  @SpeakeasyMetadata()
  request: RetargetingPostRequests;
}


export class RetargetingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
