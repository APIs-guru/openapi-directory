import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EstimationApiDeleteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class EstimationApiDeleteRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  estimationDeleteApiModel?: shared.EstimationDeleteApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  estimationDeleteApiModel1?: shared.EstimationDeleteApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  estimationDeleteApiModel2?: shared.EstimationDeleteApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class EstimationApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  headers: EstimationApiDeleteHeaders;

  @Metadata()
  request: EstimationApiDeleteRequests;
}


export class EstimationApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  estimationApiDelete200ApplicationJsonInt32Integer?: number;

  @Metadata()
  estimationApiDelete200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
