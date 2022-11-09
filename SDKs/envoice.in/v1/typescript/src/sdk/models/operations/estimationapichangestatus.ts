import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EstimationApiChangeStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class EstimationApiChangeStatusRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  estimationChangeStatusApiModel?: shared.EstimationChangeStatusApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  estimationChangeStatusApiModel1?: shared.EstimationChangeStatusApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  estimationChangeStatusApiModel2?: shared.EstimationChangeStatusApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class EstimationApiChangeStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: EstimationApiChangeStatusHeaders;

  @Metadata()
  request: EstimationApiChangeStatusRequests;
}


export class EstimationApiChangeStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  estimationApiChangeStatus200ApplicationJsonBoolean?: boolean;

  @Metadata()
  estimationApiChangeStatus200TextJsonBoolean?: boolean;

  @Metadata()
  statusCode: number;
}
