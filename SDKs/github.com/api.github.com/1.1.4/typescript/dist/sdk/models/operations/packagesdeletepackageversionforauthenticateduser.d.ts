import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesDeletePackageVersionForAuthenticatedUserPathParams extends SpeakeasyBase {
    packageName: string;
    packageType: shared.PackageTypeEnum;
    packageVersionId: number;
}
export declare class PackagesDeletePackageVersionForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: PackagesDeletePackageVersionForAuthenticatedUserPathParams;
}
export declare class PackagesDeletePackageVersionForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
