import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesRestorePackageVersionForOrgPathParams extends SpeakeasyBase {
    org: string;
    packageName: string;
    packageType: shared.PackageTypeEnum;
    packageVersionId: number;
}
export declare class PackagesRestorePackageVersionForOrgRequest extends SpeakeasyBase {
    pathParams: PackagesRestorePackageVersionForOrgPathParams;
}
export declare class PackagesRestorePackageVersionForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
