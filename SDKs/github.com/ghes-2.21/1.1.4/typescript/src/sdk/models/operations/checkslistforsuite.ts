import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChecksListForSuitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=check_suite_id" })
  checkSuiteId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ChecksListForSuiteFilterEnum {
    Latest = "latest",
    All = "all"
}


export class ChecksListForSuiteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=check_name" })
  checkName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: ChecksListForSuiteFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.StatusEnum;
}


export class ChecksListForSuite200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_runs", elemType: shared.CheckRun })
  checkRuns: shared.CheckRun[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ChecksListForSuiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChecksListForSuitePathParams;

  @SpeakeasyMetadata()
  queryParams: ChecksListForSuiteQueryParams;
}


export class ChecksListForSuiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checksListForSuite200ApplicationJsonObject?: ChecksListForSuite200ApplicationJson;
}
