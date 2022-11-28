import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposRemoveStatusCheckContextsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposRemoveStatusCheckContextsRequestBody extends SpeakeasyBase {
    contexts: string[];
}
export declare class ReposRemoveStatusCheckContextsRequest extends SpeakeasyBase {
    pathParams: ReposRemoveStatusCheckContextsPathParams;
    request?: ReposRemoveStatusCheckContextsRequestBody;
}
export declare class ReposRemoveStatusCheckContextsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    reposRemoveStatusCheckContexts200ApplicationJsonStrings?: string[];
    validationError?: shared.ValidationError;
}
