import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChecksListForRefPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ChecksListForRefFilterEnum {
    Latest = "latest",
    All = "all"
}


export class ChecksListForRefQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=check_name" })
  checkName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: ChecksListForRefFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.StatusEnum;
}


export class ChecksListForRef200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_runs", elemType: shared.CheckRun })
  checkRuns: shared.CheckRun[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ChecksListForRefRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChecksListForRefPathParams;

  @SpeakeasyMetadata()
  queryParams: ChecksListForRefQueryParams;
}


export class ChecksListForRefResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checksListForRef200ApplicationJsonObject?: ChecksListForRef200ApplicationJson;
}
