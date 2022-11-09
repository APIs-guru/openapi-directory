import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WorkTypeApiNewHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class WorkTypeApiNewRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  workTypeCreateApiModel?: shared.WorkTypeCreateApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  workTypeCreateApiModel1?: shared.WorkTypeCreateApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  workTypeCreateApiModel2?: shared.WorkTypeCreateApiModel;
}


export class WorkTypeApiNewRequest extends SpeakeasyBase {
  @Metadata()
  headers: WorkTypeApiNewHeaders;

  @Metadata()
  request: WorkTypeApiNewRequests;
}


export class WorkTypeApiNewResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  workTypeApiNew200ApplicationJsonInt32Integer?: number;

  @Metadata()
  workTypeApiNew200TextJsonInt32Integer?: number;
}
