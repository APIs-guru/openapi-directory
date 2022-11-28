import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetCommitPathParams extends SpeakeasyBase {
    owner: string;
    ref: string;
    repo: string;
}
export declare class ReposGetCommitQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposGetCommitRequest extends SpeakeasyBase {
    pathParams: ReposGetCommitPathParams;
    queryParams: ReposGetCommitQueryParams;
}
export declare class ReposGetCommitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    commit?: shared.Commit;
    validationError?: shared.ValidationError;
}
