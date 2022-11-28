import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams extends SpeakeasyBase {
    org: string;
    packageName: string;
    packageType: shared.PackageTypeEnum;
}
export declare enum PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum {
    Active = "active",
    Deleted = "deleted"
}
export declare class PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    state?: PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum;
}
export declare class PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest extends SpeakeasyBase {
    pathParams: PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams;
    queryParams: PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams;
}
export declare class PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    packageVersions?: shared.PackageVersion[];
}
