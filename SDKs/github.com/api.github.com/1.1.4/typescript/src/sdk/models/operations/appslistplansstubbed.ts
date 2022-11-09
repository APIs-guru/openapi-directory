import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsListPlansStubbedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class AppsListPlansStubbedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AppsListPlansStubbedQueryParams;
}


export class AppsListPlansStubbedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.MarketplaceListingPlan })
  marketplaceListingPlans?: shared.MarketplaceListingPlan[];
}
