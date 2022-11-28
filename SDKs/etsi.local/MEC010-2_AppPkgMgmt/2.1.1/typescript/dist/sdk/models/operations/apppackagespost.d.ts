import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppPackagesPostRequest extends SpeakeasyBase {
    request: shared.CreateAppPkg;
}
export declare class AppPackagesPostResponse extends SpeakeasyBase {
    appPkgInfos?: shared.AppPkgInfo[];
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
