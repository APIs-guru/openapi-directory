import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadResumableCancelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_id" })
  uploadId: string;
}


export class UploadResumableCancelHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Length" })
  contentLength: number;
}


export class UploadResumableCancelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UploadResumableCancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UploadResumableCancelQueryParams;

  @SpeakeasyMetadata()
  headers: UploadResumableCancelHeaders;

  @SpeakeasyMetadata()
  security: UploadResumableCancelSecurity;
}


export class UploadResumableCancelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
