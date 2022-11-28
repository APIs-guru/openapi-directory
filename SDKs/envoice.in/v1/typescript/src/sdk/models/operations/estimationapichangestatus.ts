import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EstimationApiChangeStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class EstimationApiChangeStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  estimationChangeStatusApiModel?: shared.EstimationChangeStatusApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  estimationChangeStatusApiModel1?: shared.EstimationChangeStatusApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  estimationChangeStatusApiModel2?: shared.EstimationChangeStatusApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class EstimationApiChangeStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EstimationApiChangeStatusHeaders;

  @SpeakeasyMetadata()
  request: EstimationApiChangeStatusRequests;
}


export class EstimationApiChangeStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  estimationApiChangeStatus200ApplicationJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  estimationApiChangeStatus200TextJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  statusCode: number;
}
