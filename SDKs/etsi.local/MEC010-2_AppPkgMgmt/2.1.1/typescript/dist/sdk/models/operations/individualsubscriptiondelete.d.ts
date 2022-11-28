import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IndividualSubscriptionDeletePathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class IndividualSubscriptionDeleteRequest extends SpeakeasyBase {
    pathParams: IndividualSubscriptionDeletePathParams;
}
export declare class IndividualSubscriptionDeleteResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
