import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WorkTypeApiUpdateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class WorkTypeApiUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  workTypeUpdateApiModel?: shared.WorkTypeUpdateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  workTypeUpdateApiModel1?: shared.WorkTypeUpdateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  workTypeUpdateApiModel2?: shared.WorkTypeUpdateApiModel;
}


export class WorkTypeApiUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: WorkTypeApiUpdateHeaders;

  @SpeakeasyMetadata()
  request: WorkTypeApiUpdateRequests;
}


export class WorkTypeApiUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
