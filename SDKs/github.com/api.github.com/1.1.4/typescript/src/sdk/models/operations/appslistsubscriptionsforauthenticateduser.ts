import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsListSubscriptionsForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class AppsListSubscriptionsForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AppsListSubscriptionsForAuthenticatedUserQueryParams;
}


export class AppsListSubscriptionsForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.UserMarketplacePurchase })
  userMarketplacePurchases?: shared.UserMarketplacePurchase[];
}
