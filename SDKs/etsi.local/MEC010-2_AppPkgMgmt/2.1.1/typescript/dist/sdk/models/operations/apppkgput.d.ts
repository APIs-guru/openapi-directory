import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppPkgPutPathParams extends SpeakeasyBase {
    appPkgId: string;
}
export declare class AppPkgPutRequest extends SpeakeasyBase {
    pathParams: AppPkgPutPathParams;
    request?: Uint8Array;
}
export declare class AppPkgPutResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
