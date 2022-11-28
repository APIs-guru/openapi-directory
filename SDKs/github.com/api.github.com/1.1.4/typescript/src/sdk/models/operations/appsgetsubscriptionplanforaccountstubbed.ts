import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsGetSubscriptionPlanForAccountStubbedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: number;
}


export class AppsGetSubscriptionPlanForAccountStubbedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsGetSubscriptionPlanForAccountStubbedPathParams;
}


export class AppsGetSubscriptionPlanForAccountStubbedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  marketplacePurchase?: shared.MarketplacePurchase;
}
