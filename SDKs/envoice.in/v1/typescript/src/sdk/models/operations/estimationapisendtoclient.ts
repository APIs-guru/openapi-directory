import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EstimationApiSendToClientHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class EstimationApiSendToClientRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  sendEstimationToClientApiModel?: shared.SendEstimationToClientApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  sendEstimationToClientApiModel1?: shared.SendEstimationToClientApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  sendEstimationToClientApiModel2?: shared.SendEstimationToClientApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class EstimationApiSendToClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EstimationApiSendToClientHeaders;

  @SpeakeasyMetadata()
  request: EstimationApiSendToClientRequests;
}


export class EstimationApiSendToClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  estimationApiSendToClient200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  estimationApiSendToClient200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
