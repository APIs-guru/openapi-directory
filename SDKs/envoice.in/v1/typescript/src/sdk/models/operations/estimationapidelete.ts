import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EstimationApiDeleteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class EstimationApiDeleteRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  estimationDeleteApiModel?: shared.EstimationDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  estimationDeleteApiModel1?: shared.EstimationDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  estimationDeleteApiModel2?: shared.EstimationDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class EstimationApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EstimationApiDeleteHeaders;

  @SpeakeasyMetadata()
  request: EstimationApiDeleteRequests;
}


export class EstimationApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  estimationApiDelete200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  estimationApiDelete200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
