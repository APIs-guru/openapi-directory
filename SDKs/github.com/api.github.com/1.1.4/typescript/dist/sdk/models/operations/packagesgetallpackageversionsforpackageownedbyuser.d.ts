import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams extends SpeakeasyBase {
    packageName: string;
    packageType: shared.PackageTypeEnum;
    username: string;
}
export declare class PackagesGetAllPackageVersionsForPackageOwnedByUserRequest extends SpeakeasyBase {
    pathParams: PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams;
}
export declare class PackagesGetAllPackageVersionsForPackageOwnedByUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    packageVersions?: shared.PackageVersion[];
}
