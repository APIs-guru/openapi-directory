import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesRestorePackageVersionForAuthenticatedUserPathParams extends SpeakeasyBase {
    packageName: string;
    packageType: shared.PackageTypeEnum;
    packageVersionId: number;
}
export declare class PackagesRestorePackageVersionForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: PackagesRestorePackageVersionForAuthenticatedUserPathParams;
}
export declare class PackagesRestorePackageVersionForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
