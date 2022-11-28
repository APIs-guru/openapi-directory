import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppDIdGetPathParams extends SpeakeasyBase {
    appDId: string;
}
export declare class AppDIdGetRequest extends SpeakeasyBase {
    pathParams: AppDIdGetPathParams;
}
export declare class AppDIdGetResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
