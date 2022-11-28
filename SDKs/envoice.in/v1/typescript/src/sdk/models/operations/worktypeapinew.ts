import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WorkTypeApiNewHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class WorkTypeApiNewRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  workTypeCreateApiModel?: shared.WorkTypeCreateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  workTypeCreateApiModel1?: shared.WorkTypeCreateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  workTypeCreateApiModel2?: shared.WorkTypeCreateApiModel;
}


export class WorkTypeApiNewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: WorkTypeApiNewHeaders;

  @SpeakeasyMetadata()
  request: WorkTypeApiNewRequests;
}


export class WorkTypeApiNewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workTypeApiNew200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  workTypeApiNew200TextJsonInt32Integer?: number;
}
