import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesGetPackageVersionForUserPathParams extends SpeakeasyBase {
    packageName: string;
    packageType: shared.PackageTypeEnum;
    packageVersionId: number;
    username: string;
}
export declare class PackagesGetPackageVersionForUserRequest extends SpeakeasyBase {
    pathParams: PackagesGetPackageVersionForUserPathParams;
}
export declare class PackagesGetPackageVersionForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    packageVersion?: shared.PackageVersion;
}
