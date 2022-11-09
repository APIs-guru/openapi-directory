import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WorkTypeApiUpdateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class WorkTypeApiUpdateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  workTypeUpdateApiModel?: shared.WorkTypeUpdateApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  workTypeUpdateApiModel1?: shared.WorkTypeUpdateApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  workTypeUpdateApiModel2?: shared.WorkTypeUpdateApiModel;
}


export class WorkTypeApiUpdateRequest extends SpeakeasyBase {
  @Metadata()
  headers: WorkTypeApiUpdateHeaders;

  @Metadata()
  request: WorkTypeApiUpdateRequests;
}


export class WorkTypeApiUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
