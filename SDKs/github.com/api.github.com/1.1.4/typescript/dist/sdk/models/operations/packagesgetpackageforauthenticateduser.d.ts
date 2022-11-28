import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesGetPackageForAuthenticatedUserPathParams extends SpeakeasyBase {
    packageName: string;
    packageType: shared.PackageTypeEnum;
}
export declare class PackagesGetPackageForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: PackagesGetPackageForAuthenticatedUserPathParams;
}
export declare class PackagesGetPackageForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    package?: shared.Package;
}
