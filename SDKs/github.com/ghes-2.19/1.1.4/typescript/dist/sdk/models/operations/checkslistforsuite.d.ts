import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChecksListForSuitePathParams extends SpeakeasyBase {
    checkSuiteId: number;
    owner: string;
    repo: string;
}
export declare enum ChecksListForSuiteFilterEnum {
    Latest = "latest",
    All = "all"
}
export declare class ChecksListForSuiteQueryParams extends SpeakeasyBase {
    checkName?: string;
    filter?: ChecksListForSuiteFilterEnum;
    page?: number;
    perPage?: number;
    status?: shared.StatusEnum;
}
export declare class ChecksListForSuite200ApplicationJson extends SpeakeasyBase {
    checkRuns: shared.CheckRun[];
    totalCount: number;
}
export declare class ChecksListForSuiteRequest extends SpeakeasyBase {
    pathParams: ChecksListForSuitePathParams;
    queryParams: ChecksListForSuiteQueryParams;
}
export declare class ChecksListForSuiteResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    checksListForSuite200ApplicationJsonObject?: ChecksListForSuite200ApplicationJson;
}
