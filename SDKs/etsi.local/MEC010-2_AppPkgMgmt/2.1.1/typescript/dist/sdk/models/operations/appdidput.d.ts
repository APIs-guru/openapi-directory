import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppDIdPutPathParams extends SpeakeasyBase {
    appDId: string;
}
export declare class AppDIdPutRequest extends SpeakeasyBase {
    pathParams: AppDIdPutPathParams;
    request?: Uint8Array;
}
export declare class AppDIdPutResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
