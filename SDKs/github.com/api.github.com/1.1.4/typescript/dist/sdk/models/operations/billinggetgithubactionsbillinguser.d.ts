import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingGetGithubActionsBillingUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class BillingGetGithubActionsBillingUserRequest extends SpeakeasyBase {
    pathParams: BillingGetGithubActionsBillingUserPathParams;
}
export declare class BillingGetGithubActionsBillingUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsBillingUsage?: shared.ActionsBillingUsage;
}
