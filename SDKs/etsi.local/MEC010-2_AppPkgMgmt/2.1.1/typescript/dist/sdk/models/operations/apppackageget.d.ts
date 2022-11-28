import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppPackageGetPathParams extends SpeakeasyBase {
    appPkgId: string;
}
export declare class AppPackageGetRequest extends SpeakeasyBase {
    pathParams: AppPackageGetPathParams;
}
export declare class AppPackageGetResponse extends SpeakeasyBase {
    appPkgInfo?: shared.AppPkgInfo;
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
