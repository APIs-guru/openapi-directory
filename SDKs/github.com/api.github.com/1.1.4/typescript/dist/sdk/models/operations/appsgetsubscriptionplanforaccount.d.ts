import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsGetSubscriptionPlanForAccountPathParams extends SpeakeasyBase {
    accountId: number;
}
export declare class AppsGetSubscriptionPlanForAccountRequest extends SpeakeasyBase {
    pathParams: AppsGetSubscriptionPlanForAccountPathParams;
}
export declare class AppsGetSubscriptionPlanForAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    marketplacePurchase?: shared.MarketplacePurchase;
}
