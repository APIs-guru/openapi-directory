import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingGetGithubPackagesBillingGhePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class BillingGetGithubPackagesBillingGheRequest extends SpeakeasyBase {
    pathParams: BillingGetGithubPackagesBillingGhePathParams;
}
export declare class BillingGetGithubPackagesBillingGheResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    packagesBillingUsage?: shared.PackagesBillingUsage;
}
