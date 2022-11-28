import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetargetingPutRequests extends SpeakeasyBase {
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


export class RetargetingPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: RetargetingPutRequests;
}


export class RetargetingPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
