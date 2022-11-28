import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChecksListSuitesForRefPathParams extends SpeakeasyBase {
    owner: string;
    ref: string;
    repo: string;
}
export declare class ChecksListSuitesForRefQueryParams extends SpeakeasyBase {
    appId?: number;
    checkName?: string;
    page?: number;
    perPage?: number;
}
export declare class ChecksListSuitesForRef200ApplicationJson extends SpeakeasyBase {
    checkSuites: shared.CheckSuite[];
    totalCount: number;
}
export declare class ChecksListSuitesForRefRequest extends SpeakeasyBase {
    pathParams: ChecksListSuitesForRefPathParams;
    queryParams: ChecksListSuitesForRefQueryParams;
}
export declare class ChecksListSuitesForRefResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    checksListSuitesForRef200ApplicationJsonObject?: ChecksListSuitesForRef200ApplicationJson;
}
