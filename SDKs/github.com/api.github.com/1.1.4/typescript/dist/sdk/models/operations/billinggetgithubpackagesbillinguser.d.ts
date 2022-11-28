import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingGetGithubPackagesBillingUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class BillingGetGithubPackagesBillingUserRequest extends SpeakeasyBase {
    pathParams: BillingGetGithubPackagesBillingUserPathParams;
}
export declare class BillingGetGithubPackagesBillingUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    packagesBillingUsage?: shared.PackagesBillingUsage;
}
