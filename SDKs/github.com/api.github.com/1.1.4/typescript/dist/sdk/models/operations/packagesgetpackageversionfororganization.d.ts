import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesGetPackageVersionForOrganizationPathParams extends SpeakeasyBase {
    org: string;
    packageName: string;
    packageType: shared.PackageTypeEnum;
    packageVersionId: number;
}
export declare class PackagesGetPackageVersionForOrganizationRequest extends SpeakeasyBase {
    pathParams: PackagesGetPackageVersionForOrganizationPathParams;
}
export declare class PackagesGetPackageVersionForOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    packageVersion?: shared.PackageVersion;
}
