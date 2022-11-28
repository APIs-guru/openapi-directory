import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConversionsPutRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiCoreDtoConversionsConversion?: shared.ApiCoreDtoConversionsConversion;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoConversionsConversion1?: shared.ApiCoreDtoConversionsConversion;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiCoreDtoConversionsConversion2?: shared.ApiCoreDtoConversionsConversion;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ConversionsPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: ConversionsPutRequests;
}


export class ConversionsPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
