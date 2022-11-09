import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClientApiDeleteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class ClientApiDeleteRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  clientDeleteApiModel?: shared.ClientDeleteApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  clientDeleteApiModel1?: shared.ClientDeleteApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  clientDeleteApiModel2?: shared.ClientDeleteApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ClientApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  headers: ClientApiDeleteHeaders;

  @Metadata()
  request: ClientApiDeleteRequests;
}


export class ClientApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  clientApiDelete200ApplicationJsonInt32Integer?: number;

  @Metadata()
  clientApiDelete200TextJsonInt32Integer?: number;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
