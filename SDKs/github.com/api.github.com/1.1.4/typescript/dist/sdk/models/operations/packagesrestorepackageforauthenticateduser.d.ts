import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesRestorePackageForAuthenticatedUserPathParams extends SpeakeasyBase {
    packageName: string;
    packageType: shared.PackageTypeEnum;
}
export declare class PackagesRestorePackageForAuthenticatedUserQueryParams extends SpeakeasyBase {
    token?: string;
}
export declare class PackagesRestorePackageForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: PackagesRestorePackageForAuthenticatedUserPathParams;
    queryParams: PackagesRestorePackageForAuthenticatedUserQueryParams;
}
export declare class PackagesRestorePackageForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
