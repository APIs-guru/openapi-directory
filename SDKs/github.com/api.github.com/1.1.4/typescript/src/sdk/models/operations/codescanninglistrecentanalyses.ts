import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CodeScanningListRecentAnalysesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningListRecentAnalysesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sarif_id" })
  sarifId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tool_guid" })
  toolGuid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tool_name" })
  toolName?: string;
}


export class CodeScanningListRecentAnalyses503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningListRecentAnalysesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CodeScanningListRecentAnalysesPathParams;

  @SpeakeasyMetadata()
  queryParams: CodeScanningListRecentAnalysesQueryParams;
}


export class CodeScanningListRecentAnalysesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.CodeScanningAnalysis })
  codeScanningAnalyses?: shared.CodeScanningAnalysis[];

  @SpeakeasyMetadata()
  codeScanningListRecentAnalyses503ApplicationJsonObject?: CodeScanningListRecentAnalyses503ApplicationJson;
}
