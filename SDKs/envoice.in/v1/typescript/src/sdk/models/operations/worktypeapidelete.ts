import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WorkTypeApiDeleteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class WorkTypeApiDeleteRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  workTypeDeleteApiModel?: shared.WorkTypeDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  workTypeDeleteApiModel1?: shared.WorkTypeDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  workTypeDeleteApiModel2?: shared.WorkTypeDeleteApiModel;
}


export class WorkTypeApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: WorkTypeApiDeleteHeaders;

  @SpeakeasyMetadata()
  request: WorkTypeApiDeleteRequests;
}


export class WorkTypeApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workTypeApiDelete200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  workTypeApiDelete200TextJsonInt32Integer?: number;
}
