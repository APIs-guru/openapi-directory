import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EstimationApiSendToClientHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class EstimationApiSendToClientRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  sendEstimationToClientApiModel?: shared.SendEstimationToClientApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  sendEstimationToClientApiModel1?: shared.SendEstimationToClientApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  sendEstimationToClientApiModel2?: shared.SendEstimationToClientApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class EstimationApiSendToClientRequest extends SpeakeasyBase {
  @Metadata()
  headers: EstimationApiSendToClientHeaders;

  @Metadata()
  request: EstimationApiSendToClientRequests;
}


export class EstimationApiSendToClientResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  estimationApiSendToClient200ApplicationJsonInt32Integer?: number;

  @Metadata()
  estimationApiSendToClient200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
