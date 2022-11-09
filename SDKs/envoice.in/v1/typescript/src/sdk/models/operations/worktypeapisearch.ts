import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum WorkTypeApiSearchQueryOptionsOrderEnum {
    None = "None"
,    Asc = "Asc"
,    Desc = "Desc"
}


export class WorkTypeApiSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=queryOptions.order" })
  queryOptionsOrder?: WorkTypeApiSearchQueryOptionsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=queryOptions.orderBy" })
  queryOptionsOrderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=queryOptions.page" })
  queryOptionsPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=queryOptions.pageSize" })
  queryOptionsPageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=queryOptions.query" })
  queryOptionsQuery?: string;
}


export class WorkTypeApiSearchHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class WorkTypeApiSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: WorkTypeApiSearchQueryParams;

  @Metadata()
  headers: WorkTypeApiSearchHeaders;
}


export class WorkTypeApiSearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.WorkTypeDetailsApiModel })
  workTypeDetailsApiModels?: shared.WorkTypeDetailsApiModel[];
}
