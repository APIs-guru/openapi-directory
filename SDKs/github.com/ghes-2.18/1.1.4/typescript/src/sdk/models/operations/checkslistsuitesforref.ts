import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChecksListSuitesForRefPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ref" })
  ref: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksListSuitesForRefQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=check_name" })
  checkName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ChecksListSuitesForRefRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChecksListSuitesForRefPathParams;

  @Metadata()
  queryParams: ChecksListSuitesForRefQueryParams;
}


export class ChecksListSuitesForRef200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=check_suites", elemType: shared.CheckSuite })
  checkSuites: shared.CheckSuite[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ChecksListSuitesForRefResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  checksListSuitesForRef200ApplicationJsonObject?: ChecksListSuitesForRef200ApplicationJson;
}
