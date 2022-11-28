import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChecksListSuitesForRefPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksListSuitesForRefQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=check_name" })
  checkName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ChecksListSuitesForRef200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_suites", elemType: shared.CheckSuite })
  checkSuites: shared.CheckSuite[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ChecksListSuitesForRefRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChecksListSuitesForRefPathParams;

  @SpeakeasyMetadata()
  queryParams: ChecksListSuitesForRefQueryParams;
}


export class ChecksListSuitesForRefResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checksListSuitesForRef200ApplicationJsonObject?: ChecksListSuitesForRef200ApplicationJson;
}
