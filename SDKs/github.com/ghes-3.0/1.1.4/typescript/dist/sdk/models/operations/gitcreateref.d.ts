import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitCreateRefPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class GitCreateRefRequestBody extends SpeakeasyBase {
    key?: string;
    ref: string;
    sha: string;
}
export declare class GitCreateRefRequest extends SpeakeasyBase {
    pathParams: GitCreateRefPathParams;
    request?: GitCreateRefRequestBody;
}
export declare class GitCreateRefResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    gitRef?: shared.GitRef;
    validationError?: shared.ValidationError;
}
