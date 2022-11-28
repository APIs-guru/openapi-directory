import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IndividualSubscriptionGetPathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class IndividualSubscriptionGetRequest extends SpeakeasyBase {
    pathParams: IndividualSubscriptionGetPathParams;
}
export declare class IndividualSubscriptionGetResponse extends SpeakeasyBase {
    appPkgSubscriptionInfo?: shared.AppPkgSubscriptionInfo;
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
