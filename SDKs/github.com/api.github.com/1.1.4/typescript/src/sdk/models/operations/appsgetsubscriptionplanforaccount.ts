import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsGetSubscriptionPlanForAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: number;
}


export class AppsGetSubscriptionPlanForAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsGetSubscriptionPlanForAccountPathParams;
}


export class AppsGetSubscriptionPlanForAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  marketplacePurchase?: shared.MarketplacePurchase;
}
