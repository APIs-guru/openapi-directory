import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsListAccountsForPlanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=plan_id" })
  planId: number;
}

export enum AppsListAccountsForPlanDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class AppsListAccountsForPlanQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: AppsListAccountsForPlanDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;
}


export class AppsListAccountsForPlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsListAccountsForPlanPathParams;

  @SpeakeasyMetadata()
  queryParams: AppsListAccountsForPlanQueryParams;
}


export class AppsListAccountsForPlanResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
