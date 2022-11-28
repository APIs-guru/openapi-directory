import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingGetGithubActionsBillingOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class BillingGetGithubActionsBillingOrgRequest extends SpeakeasyBase {
    pathParams: BillingGetGithubActionsBillingOrgPathParams;
}
export declare class BillingGetGithubActionsBillingOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsBillingUsage?: shared.ActionsBillingUsage;
}
