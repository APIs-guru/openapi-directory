import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsGetSubscriptionPlanForAccountStubbedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: number;
}


export class AppsGetSubscriptionPlanForAccountStubbedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsGetSubscriptionPlanForAccountStubbedPathParams;
}


export class AppsGetSubscriptionPlanForAccountStubbedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  marketplacePurchase?: shared.MarketplacePurchase;
}
