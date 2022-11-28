import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CodeScanningUploadSarifPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningUploadSarifRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkout_uri" })
  checkoutUri?: string;

  @SpeakeasyMetadata({ data: "json, name=commit_sha" })
  commitSha: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "json, name=sarif" })
  sarif: string;

  @SpeakeasyMetadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=tool_name" })
  toolName?: string;
}


export class CodeScanningUploadSarif503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningUploadSarifRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CodeScanningUploadSarifPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CodeScanningUploadSarifRequestBody;
}


export class CodeScanningUploadSarifResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  codeScanningSarifsReceipt?: shared.CodeScanningSarifsReceipt;

  @SpeakeasyMetadata()
  codeScanningUploadSarif503ApplicationJsonObject?: CodeScanningUploadSarif503ApplicationJson;
}
