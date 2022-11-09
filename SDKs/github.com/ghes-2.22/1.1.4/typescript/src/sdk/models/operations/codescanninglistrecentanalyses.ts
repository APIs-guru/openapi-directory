import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CodeScanningListRecentAnalysesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningListRecentAnalysesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sarif_id" })
  sarifId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tool_guid" })
  toolGuid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tool_name" })
  toolName?: string;
}


export class CodeScanningListRecentAnalysesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CodeScanningListRecentAnalysesPathParams;

  @Metadata()
  queryParams: CodeScanningListRecentAnalysesQueryParams;
}


export class CodeScanningListRecentAnalyses503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningListRecentAnalysesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.CodeScanningAnalysis })
  codeScanningAnalyses?: shared.CodeScanningAnalysis[];

  @Metadata()
  codeScanningListRecentAnalyses503ApplicationJsonObject?: CodeScanningListRecentAnalyses503ApplicationJson;
}
