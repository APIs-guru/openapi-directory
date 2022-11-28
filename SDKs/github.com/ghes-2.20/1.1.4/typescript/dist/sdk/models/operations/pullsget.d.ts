import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsGetPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsGetRequest extends SpeakeasyBase {
    pathParams: PullsGetPathParams;
}
export declare class PullsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    pullRequest?: shared.PullRequest;
}
