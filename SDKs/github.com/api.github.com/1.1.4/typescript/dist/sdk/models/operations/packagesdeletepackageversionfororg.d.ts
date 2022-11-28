import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesDeletePackageVersionForOrgPathParams extends SpeakeasyBase {
    org: string;
    packageName: string;
    packageType: shared.PackageTypeEnum;
    packageVersionId: number;
}
export declare class PackagesDeletePackageVersionForOrgRequest extends SpeakeasyBase {
    pathParams: PackagesDeletePackageVersionForOrgPathParams;
}
export declare class PackagesDeletePackageVersionForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
