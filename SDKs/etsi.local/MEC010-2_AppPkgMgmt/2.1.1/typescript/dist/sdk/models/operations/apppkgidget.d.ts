import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppPkgIdGetPathParams extends SpeakeasyBase {
    appPkgId: string;
}
export declare class AppPkgIdGetQueryParams extends SpeakeasyBase {
    allFields?: string;
    excludeDefault?: string;
    excludeFields?: string;
    fields?: string;
    filter?: string;
}
export declare class AppPkgIdGetRequest extends SpeakeasyBase {
    pathParams: AppPkgIdGetPathParams;
    queryParams: AppPkgIdGetQueryParams;
}
export declare class AppPkgIdGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
