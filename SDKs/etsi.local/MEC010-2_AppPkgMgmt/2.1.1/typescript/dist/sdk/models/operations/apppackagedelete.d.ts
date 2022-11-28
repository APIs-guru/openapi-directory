import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppPackageDeletePathParams extends SpeakeasyBase {
    appPkgId: string;
}
export declare class AppPackageDeleteRequest extends SpeakeasyBase {
    pathParams: AppPackageDeletePathParams;
}
export declare class AppPackageDeleteResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
