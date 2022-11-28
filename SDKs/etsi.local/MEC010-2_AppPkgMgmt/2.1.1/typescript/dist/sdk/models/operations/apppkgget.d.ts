import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppPkgGetPathParams extends SpeakeasyBase {
    appPkgId: string;
}
export declare class AppPkgGetRequest extends SpeakeasyBase {
    pathParams: AppPkgGetPathParams;
}
export declare class AppPkgGetResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
