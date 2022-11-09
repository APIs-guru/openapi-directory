import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsListAccountsForPlanStubbedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=plan_id" })
  planId: number;
}

export enum AppsListAccountsForPlanStubbedDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class AppsListAccountsForPlanStubbedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: AppsListAccountsForPlanStubbedDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;
}


export class AppsListAccountsForPlanStubbedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsListAccountsForPlanStubbedPathParams;

  @Metadata()
  queryParams: AppsListAccountsForPlanStubbedQueryParams;
}


export class AppsListAccountsForPlanStubbedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.MarketplacePurchase })
  marketplacePurchases?: shared.MarketplacePurchase[];
}
