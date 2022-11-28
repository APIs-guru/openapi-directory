import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposAddStatusCheckContextsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposAddStatusCheckContextsRequestBody extends SpeakeasyBase {
    contexts: string[];
}
export declare class ReposAddStatusCheckContextsRequest extends SpeakeasyBase {
    pathParams: ReposAddStatusCheckContextsPathParams;
    request?: ReposAddStatusCheckContextsRequestBody;
}
export declare class ReposAddStatusCheckContextsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    reposAddStatusCheckContexts200ApplicationJsonStrings?: string[];
    validationError?: shared.ValidationError;
}
