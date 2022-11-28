import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetCombinedStatusForRefPathParams extends SpeakeasyBase {
    owner: string;
    ref: string;
    repo: string;
}
export declare class ReposGetCombinedStatusForRefQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposGetCombinedStatusForRefRequest extends SpeakeasyBase {
    pathParams: ReposGetCombinedStatusForRefPathParams;
    queryParams: ReposGetCombinedStatusForRefQueryParams;
}
export declare class ReposGetCombinedStatusForRefResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    combinedCommitStatus?: shared.CombinedCommitStatus;
}
