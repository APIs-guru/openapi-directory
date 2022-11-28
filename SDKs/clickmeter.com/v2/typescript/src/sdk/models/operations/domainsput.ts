import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DomainsPutRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiCoreDtoDomainsDomain?: shared.ApiCoreDtoDomainsDomain;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoDomainsDomain1?: shared.ApiCoreDtoDomainsDomain;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiCoreDtoDomainsDomain2?: shared.ApiCoreDtoDomainsDomain;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class DomainsPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: DomainsPutRequests;
}


export class DomainsPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
