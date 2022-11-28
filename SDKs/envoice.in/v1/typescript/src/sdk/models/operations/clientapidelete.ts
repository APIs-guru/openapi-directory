import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClientApiDeleteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class ClientApiDeleteRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  clientDeleteApiModel?: shared.ClientDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  clientDeleteApiModel1?: shared.ClientDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  clientDeleteApiModel2?: shared.ClientDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ClientApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ClientApiDeleteHeaders;

  @SpeakeasyMetadata()
  request: ClientApiDeleteRequests;
}


export class ClientApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  clientApiDelete200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  clientApiDelete200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
