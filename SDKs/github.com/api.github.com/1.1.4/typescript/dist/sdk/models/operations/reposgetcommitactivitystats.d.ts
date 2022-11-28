import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetCommitActivityStatsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetCommitActivityStatsRequest extends SpeakeasyBase {
    pathParams: ReposGetCommitActivityStatsPathParams;
}
export declare class ReposGetCommitActivityStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    commitActivities?: shared.CommitActivity[];
}
