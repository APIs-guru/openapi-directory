import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsGetSubscriptionPlanForAccountStubbedPathParams extends SpeakeasyBase {
    accountId: number;
}
export declare class AppsGetSubscriptionPlanForAccountStubbedRequest extends SpeakeasyBase {
    pathParams: AppsGetSubscriptionPlanForAccountStubbedPathParams;
}
export declare class AppsGetSubscriptionPlanForAccountStubbedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    marketplacePurchase?: shared.MarketplacePurchase;
}
