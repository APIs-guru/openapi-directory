import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsCreatePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class PullsCreateRequestBody extends SpeakeasyBase {
    base: string;
    body?: string;
    draft?: boolean;
    head: string;
    issue?: number;
    maintainerCanModify?: boolean;
    title?: string;
}
export declare class PullsCreateRequest extends SpeakeasyBase {
    pathParams: PullsCreatePathParams;
    request?: PullsCreateRequestBody;
}
export declare class PullsCreateResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    pullRequest?: shared.PullRequest;
    validationError?: shared.ValidationError;
}
