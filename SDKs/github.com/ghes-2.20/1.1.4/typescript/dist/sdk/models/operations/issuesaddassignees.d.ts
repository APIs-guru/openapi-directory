import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesAddAssigneesPathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesAddAssigneesRequestBody extends SpeakeasyBase {
    assignees?: string[];
}
export declare class IssuesAddAssigneesRequest extends SpeakeasyBase {
    pathParams: IssuesAddAssigneesPathParams;
    request?: IssuesAddAssigneesRequestBody;
}
export declare class IssuesAddAssigneesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    issueSimple?: shared.IssueSimple;
}
