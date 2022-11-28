import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCompareCommitsPathParams extends SpeakeasyBase {
    base: string;
    head: string;
    owner: string;
    repo: string;
}
export declare class ReposCompareCommitsRequest extends SpeakeasyBase {
    pathParams: ReposCompareCommitsPathParams;
}
export declare class ReposCompareCommitsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    commitComparison?: shared.CommitComparison;
}
