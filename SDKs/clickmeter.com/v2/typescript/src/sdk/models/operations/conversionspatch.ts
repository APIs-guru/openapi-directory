import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConversionsPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversionId" })
  conversionId: number;
}


export class ConversionsPatchRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiCoreRequestsConversionPatchBody?: shared.ApiCoreRequestsConversionPatchBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreRequestsConversionPatchBody1?: shared.ApiCoreRequestsConversionPatchBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiCoreRequestsConversionPatchBody2?: shared.ApiCoreRequestsConversionPatchBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ConversionsPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConversionsPatchPathParams;

  @SpeakeasyMetadata()
  request: ConversionsPatchRequests;
}


export class ConversionsPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
