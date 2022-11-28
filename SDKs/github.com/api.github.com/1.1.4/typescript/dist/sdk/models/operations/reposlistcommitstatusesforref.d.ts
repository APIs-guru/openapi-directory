import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListCommitStatusesForRefPathParams extends SpeakeasyBase {
    owner: string;
    ref: string;
    repo: string;
}
export declare class ReposListCommitStatusesForRefQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListCommitStatusesForRefRequest extends SpeakeasyBase {
    pathParams: ReposListCommitStatusesForRefPathParams;
    queryParams: ReposListCommitStatusesForRefQueryParams;
}
export declare class ReposListCommitStatusesForRefResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    statuses?: shared.Status[];
}
