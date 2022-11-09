import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChecksListForSuitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=check_suite_id" })
  checkSuiteId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ChecksListForSuiteFilterEnum {
    Latest = "latest"
,    All = "all"
}


export class ChecksListForSuiteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=check_name" })
  checkName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: ChecksListForSuiteFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.StatusEnum;
}


export class ChecksListForSuiteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChecksListForSuitePathParams;

  @Metadata()
  queryParams: ChecksListForSuiteQueryParams;
}


export class ChecksListForSuite200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=check_runs", elemType: shared.CheckRun })
  checkRuns: shared.CheckRun[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ChecksListForSuiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  checksListForSuite200ApplicationJsonObject?: ChecksListForSuite200ApplicationJson;
}
