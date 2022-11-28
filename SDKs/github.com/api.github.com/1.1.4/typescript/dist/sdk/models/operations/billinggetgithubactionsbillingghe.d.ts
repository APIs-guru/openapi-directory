import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingGetGithubActionsBillingGhePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class BillingGetGithubActionsBillingGheRequest extends SpeakeasyBase {
    pathParams: BillingGetGithubActionsBillingGhePathParams;
}
export declare class BillingGetGithubActionsBillingGheResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsBillingUsage?: shared.ActionsBillingUsage;
}
