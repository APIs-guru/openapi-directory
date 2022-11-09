import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsListAccountsForPlanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=plan_id" })
  planId: number;
}

export enum AppsListAccountsForPlanDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class AppsListAccountsForPlanQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: AppsListAccountsForPlanDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;
}


export class AppsListAccountsForPlanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsListAccountsForPlanPathParams;

  @Metadata()
  queryParams: AppsListAccountsForPlanQueryParams;
}


export class AppsListAccountsForPlanResponse extends SpeakeasyBase {
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

  @Metadata()
  validationError?: shared.ValidationError;
}
