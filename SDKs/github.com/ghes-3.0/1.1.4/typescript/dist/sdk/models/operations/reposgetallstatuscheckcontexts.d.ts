import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetAllStatusCheckContextsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposGetAllStatusCheckContextsRequest extends SpeakeasyBase {
    pathParams: ReposGetAllStatusCheckContextsPathParams;
}
export declare class ReposGetAllStatusCheckContextsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    reposGetAllStatusCheckContexts200ApplicationJsonStrings?: string[];
}
