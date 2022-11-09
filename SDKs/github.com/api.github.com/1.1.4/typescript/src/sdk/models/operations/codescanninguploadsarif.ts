import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CodeScanningUploadSarifPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningUploadSarifRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkout_uri" })
  checkoutUri?: string;

  @Metadata({ data: "json, name=commit_sha" })
  commitSha: string;

  @Metadata({ data: "json, name=ref" })
  ref: string;

  @Metadata({ data: "json, name=sarif" })
  sarif: string;

  @Metadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @Metadata({ data: "json, name=tool_name" })
  toolName?: string;
}


export class CodeScanningUploadSarifRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CodeScanningUploadSarifPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CodeScanningUploadSarifRequestBody;
}


export class CodeScanningUploadSarif503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningUploadSarifResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  codeScanningSarifsReceipt?: shared.CodeScanningSarifsReceipt;

  @Metadata()
  codeScanningUploadSarif503ApplicationJsonObject?: CodeScanningUploadSarif503ApplicationJson;
}
