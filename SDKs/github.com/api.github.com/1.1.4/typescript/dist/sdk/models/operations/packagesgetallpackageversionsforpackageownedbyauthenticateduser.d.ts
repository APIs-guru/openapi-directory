import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams extends SpeakeasyBase {
    packageName: string;
    packageType: shared.PackageTypeEnum;
}
export declare enum PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnum {
    Active = "active",
    Deleted = "deleted"
}
export declare class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    state?: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnum;
}
export declare class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams;
    queryParams: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams;
}
export declare class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    packageVersions?: shared.PackageVersion[];
}
