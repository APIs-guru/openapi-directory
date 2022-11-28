import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class AppsListSubscriptionsForAuthenticatedUserStubbedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams;
}


export class AppsListSubscriptionsForAuthenticatedUserStubbedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.UserMarketplacePurchase })
  userMarketplacePurchases?: shared.UserMarketplacePurchase[];
}
