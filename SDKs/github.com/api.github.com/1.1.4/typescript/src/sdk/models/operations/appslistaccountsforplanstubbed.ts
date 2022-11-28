import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsListAccountsForPlanStubbedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=plan_id" })
  planId: number;
}

export enum AppsListAccountsForPlanStubbedDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class AppsListAccountsForPlanStubbedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: AppsListAccountsForPlanStubbedDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;
}


export class AppsListAccountsForPlanStubbedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsListAccountsForPlanStubbedPathParams;

  @SpeakeasyMetadata()
  queryParams: AppsListAccountsForPlanStubbedQueryParams;
}


export class AppsListAccountsForPlanStubbedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.MarketplacePurchase })
  marketplacePurchases?: shared.MarketplacePurchase[];
}
