import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum WorkTypeApiSearchQueryOptionsOrderEnum {
    None = "None",
    Asc = "Asc",
    Desc = "Desc"
}


export class WorkTypeApiSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.order" })
  queryOptionsOrder?: WorkTypeApiSearchQueryOptionsOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.orderBy" })
  queryOptionsOrderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.page" })
  queryOptionsPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.pageSize" })
  queryOptionsPageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.query" })
  queryOptionsQuery?: string;
}


export class WorkTypeApiSearchHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class WorkTypeApiSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: WorkTypeApiSearchQueryParams;

  @SpeakeasyMetadata()
  headers: WorkTypeApiSearchHeaders;
}


export class WorkTypeApiSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.WorkTypeDetailsApiModel })
  workTypeDetailsApiModels?: shared.WorkTypeDetailsApiModel[];
}
