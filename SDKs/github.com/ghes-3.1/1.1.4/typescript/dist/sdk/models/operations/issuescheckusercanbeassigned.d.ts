import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesCheckUserCanBeAssignedPathParams extends SpeakeasyBase {
    assignee: string;
    owner: string;
    repo: string;
}
export declare class IssuesCheckUserCanBeAssignedRequest extends SpeakeasyBase {
    pathParams: IssuesCheckUserCanBeAssignedPathParams;
}
export declare class IssuesCheckUserCanBeAssignedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
