import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppPackagesGetQueryParams extends SpeakeasyBase {
    allFields?: string;
    excludeDefault?: string;
    excludeFields?: string;
    fields?: string;
    filter?: string;
}
export declare class AppPackagesGetRequest extends SpeakeasyBase {
    queryParams: AppPackagesGetQueryParams;
}
export declare class AppPackagesGetResponse extends SpeakeasyBase {
    appPkgInfos?: shared.AppPkgInfo[];
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
