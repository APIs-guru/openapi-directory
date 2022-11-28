import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesGetPackageForUserPathParams extends SpeakeasyBase {
    packageName: string;
    packageType: shared.PackageTypeEnum;
    username: string;
}
export declare class PackagesGetPackageForUserRequest extends SpeakeasyBase {
    pathParams: PackagesGetPackageForUserPathParams;
}
export declare class PackagesGetPackageForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    package?: shared.Package;
}
