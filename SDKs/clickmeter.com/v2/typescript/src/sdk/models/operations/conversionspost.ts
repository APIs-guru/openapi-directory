import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConversionsPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversionId" })
  conversionId: number;
}


export class ConversionsPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiCoreDtoConversionsConversion?: shared.ApiCoreDtoConversionsConversion;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoConversionsConversion1?: shared.ApiCoreDtoConversionsConversion;

  @Metadata({ data: "request, media_type=text/json" })
  apiCoreDtoConversionsConversion2?: shared.ApiCoreDtoConversionsConversion;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ConversionsPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConversionsPostPathParams;

  @Metadata()
  request: ConversionsPostRequests;
}


export class ConversionsPostResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
