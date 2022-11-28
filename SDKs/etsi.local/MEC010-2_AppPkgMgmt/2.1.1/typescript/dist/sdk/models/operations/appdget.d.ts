import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppDgetPathParams extends SpeakeasyBase {
    appDId: string;
}
export declare class AppDgetQueryParams extends SpeakeasyBase {
    allFields?: string;
    excludeDefault?: string;
    excludeFields?: string;
    fields?: string;
    filter?: string;
}
export declare class AppDgetRequest extends SpeakeasyBase {
    pathParams: AppDgetPathParams;
    queryParams: AppDgetQueryParams;
}
export declare class AppDgetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
