import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChunkedUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uploadId" })
  uploadId: string;
}


export class ChunkedUploadHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class ChunkedUploadSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ChunkedUploadSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class ChunkedUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ChunkedUploadSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ChunkedUploadSecurityOption2;
}


export class ChunkedUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChunkedUploadPathParams;

  @Metadata()
  headers: ChunkedUploadHeaders;

  @Metadata()
  security: ChunkedUploadSecurity;
}


export class ChunkedUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
