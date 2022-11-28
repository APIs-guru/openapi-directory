import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitUpdateRefPathParams extends SpeakeasyBase {
    owner: string;
    ref: string;
    repo: string;
}
export declare class GitUpdateRefRequestBody extends SpeakeasyBase {
    force?: boolean;
    sha: string;
}
export declare class GitUpdateRefRequest extends SpeakeasyBase {
    pathParams: GitUpdateRefPathParams;
    request?: GitUpdateRefRequestBody;
}
export declare class GitUpdateRefResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gitRef?: shared.GitRef;
    validationError?: shared.ValidationError;
}
