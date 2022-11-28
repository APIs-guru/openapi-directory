import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingGetGithubPackagesBillingOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class BillingGetGithubPackagesBillingOrgRequest extends SpeakeasyBase {
    pathParams: BillingGetGithubPackagesBillingOrgPathParams;
}
export declare class BillingGetGithubPackagesBillingOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    packagesBillingUsage?: shared.PackagesBillingUsage;
}
