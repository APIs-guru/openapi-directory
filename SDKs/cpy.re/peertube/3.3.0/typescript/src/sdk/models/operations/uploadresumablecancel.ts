import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadResumableCancelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_id" })
  uploadId: string;
}


export class UploadResumableCancelHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Length" })
  contentLength: number;
}


export class UploadResumableCancelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UploadResumableCancelRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UploadResumableCancelQueryParams;

  @Metadata()
  headers: UploadResumableCancelHeaders;

  @Metadata()
  security: UploadResumableCancelSecurity;
}


export class UploadResumableCancelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
