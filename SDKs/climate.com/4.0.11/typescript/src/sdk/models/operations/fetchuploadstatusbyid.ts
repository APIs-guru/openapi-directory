import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FetchUploadStatusByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uploadId" })
  uploadId: string;
}


export class FetchUploadStatusByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class FetchUploadStatusByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FetchUploadStatusByIdPathParams;

  @SpeakeasyMetadata()
  security: FetchUploadStatusByIdSecurity;
}


export class FetchUploadStatusByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadStatus?: shared.UploadStatus;
}
