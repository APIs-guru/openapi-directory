import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsGetSubscriptionPlanForAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: number;
}


export class AppsGetSubscriptionPlanForAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsGetSubscriptionPlanForAccountPathParams;
}


export class AppsGetSubscriptionPlanForAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  marketplacePurchase?: shared.MarketplacePurchase;
}
