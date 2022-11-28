import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppPackagePatchPathParams extends SpeakeasyBase {
    appPkgId: string;
}
export declare class AppPackagePatchRequest extends SpeakeasyBase {
    pathParams: AppPackagePatchPathParams;
    request: shared.AppPkgInfoModifications;
}
export declare class AppPackagePatchResponse extends SpeakeasyBase {
    appPkgInfoModifications?: shared.AppPkgInfoModifications;
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
