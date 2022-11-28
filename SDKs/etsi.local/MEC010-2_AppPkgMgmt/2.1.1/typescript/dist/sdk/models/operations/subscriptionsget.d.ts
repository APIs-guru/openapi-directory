import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubscriptionsGetResponse extends SpeakeasyBase {
    appPkgSubscriptionLinkList?: shared.AppPkgSubscriptionLinkList;
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
