import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DomainsPutRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiCoreDtoDomainsDomain?: shared.ApiCoreDtoDomainsDomain;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoDomainsDomain1?: shared.ApiCoreDtoDomainsDomain;

  @Metadata({ data: "request, media_type=text/json" })
  apiCoreDtoDomainsDomain2?: shared.ApiCoreDtoDomainsDomain;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class DomainsPutRequest extends SpeakeasyBase {
  @Metadata()
  request: DomainsPutRequests;
}


export class DomainsPutResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
