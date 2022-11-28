import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesGetPackageVersionForAuthenticatedUserPathParams extends SpeakeasyBase {
    packageName: string;
    packageType: shared.PackageTypeEnum;
    packageVersionId: number;
}
export declare class PackagesGetPackageVersionForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: PackagesGetPackageVersionForAuthenticatedUserPathParams;
}
export declare class PackagesGetPackageVersionForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    packageVersion?: shared.PackageVersion;
}
