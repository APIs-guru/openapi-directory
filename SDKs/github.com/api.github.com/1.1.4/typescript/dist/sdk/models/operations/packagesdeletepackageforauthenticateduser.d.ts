import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesDeletePackageForAuthenticatedUserPathParams extends SpeakeasyBase {
    packageName: string;
    packageType: shared.PackageTypeEnum;
}
export declare class PackagesDeletePackageForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: PackagesDeletePackageForAuthenticatedUserPathParams;
}
export declare class PackagesDeletePackageForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
