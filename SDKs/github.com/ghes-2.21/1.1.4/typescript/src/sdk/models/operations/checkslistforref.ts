import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChecksListForRefPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ref" })
  ref: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ChecksListForRefFilterEnum {
    Latest = "latest"
,    All = "all"
}


export class ChecksListForRefQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=check_name" })
  checkName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: ChecksListForRefFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.StatusEnum;
}


export class ChecksListForRefRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChecksListForRefPathParams;

  @Metadata()
  queryParams: ChecksListForRefQueryParams;
}


export class ChecksListForRef200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=check_runs", elemType: shared.CheckRun })
  checkRuns: shared.CheckRun[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ChecksListForRefResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  checksListForRef200ApplicationJsonObject?: ChecksListForRef200ApplicationJson;
}
