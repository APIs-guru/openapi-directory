import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WorkTypeApiDeleteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class WorkTypeApiDeleteRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  workTypeDeleteApiModel?: shared.WorkTypeDeleteApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  workTypeDeleteApiModel1?: shared.WorkTypeDeleteApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  workTypeDeleteApiModel2?: shared.WorkTypeDeleteApiModel;
}


export class WorkTypeApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  headers: WorkTypeApiDeleteHeaders;

  @Metadata()
  request: WorkTypeApiDeleteRequests;
}


export class WorkTypeApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  workTypeApiDelete200ApplicationJsonInt32Integer?: number;

  @Metadata()
  workTypeApiDelete200TextJsonInt32Integer?: number;
}
