import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConversionsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversionId" })
  conversionId: number;
}


export class ConversionsPatchRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiCoreRequestsConversionPatchBody?: shared.ApiCoreRequestsConversionPatchBody;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreRequestsConversionPatchBody1?: shared.ApiCoreRequestsConversionPatchBody;

  @Metadata({ data: "request, media_type=text/json" })
  apiCoreRequestsConversionPatchBody2?: shared.ApiCoreRequestsConversionPatchBody;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ConversionsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConversionsPatchPathParams;

  @Metadata()
  request: ConversionsPatchRequests;
}


export class ConversionsPatchResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
