import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesRestorePackageForOrgPathParams extends SpeakeasyBase {
    org: string;
    packageName: string;
    packageType: shared.PackageTypeEnum;
}
export declare class PackagesRestorePackageForOrgQueryParams extends SpeakeasyBase {
    token?: string;
}
export declare class PackagesRestorePackageForOrgRequest extends SpeakeasyBase {
    pathParams: PackagesRestorePackageForOrgPathParams;
    queryParams: PackagesRestorePackageForOrgQueryParams;
}
export declare class PackagesRestorePackageForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
