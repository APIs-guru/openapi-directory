import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposSetStatusCheckContextsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposSetStatusCheckContextsRequestBody1 extends SpeakeasyBase {
    contexts: string[];
}
export declare class ReposSetStatusCheckContextsRequest extends SpeakeasyBase {
    pathParams: ReposSetStatusCheckContextsPathParams;
    request?: any;
}
export declare class ReposSetStatusCheckContextsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    reposSetStatusCheckContexts200ApplicationJsonStrings?: string[];
    validationError?: shared.ValidationError;
}
