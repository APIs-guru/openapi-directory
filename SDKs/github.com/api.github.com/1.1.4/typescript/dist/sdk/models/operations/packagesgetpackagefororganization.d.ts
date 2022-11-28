import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesGetPackageForOrganizationPathParams extends SpeakeasyBase {
    org: string;
    packageName: string;
    packageType: shared.PackageTypeEnum;
}
export declare class PackagesGetPackageForOrganizationRequest extends SpeakeasyBase {
    pathParams: PackagesGetPackageForOrganizationPathParams;
}
export declare class PackagesGetPackageForOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    package?: shared.Package;
}
