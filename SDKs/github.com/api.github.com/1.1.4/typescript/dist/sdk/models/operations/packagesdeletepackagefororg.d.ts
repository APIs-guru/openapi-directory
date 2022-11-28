import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesDeletePackageForOrgPathParams extends SpeakeasyBase {
    org: string;
    packageName: string;
    packageType: shared.PackageTypeEnum;
}
export declare class PackagesDeletePackageForOrgRequest extends SpeakeasyBase {
    pathParams: PackagesDeletePackageForOrgPathParams;
}
export declare class PackagesDeletePackageForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
