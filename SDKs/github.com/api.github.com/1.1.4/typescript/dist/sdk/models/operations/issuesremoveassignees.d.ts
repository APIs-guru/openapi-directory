import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesRemoveAssigneesPathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesRemoveAssigneesRequestBody extends SpeakeasyBase {
    assignees?: string[];
}
export declare class IssuesRemoveAssigneesRequest extends SpeakeasyBase {
    pathParams: IssuesRemoveAssigneesPathParams;
    request?: IssuesRemoveAssigneesRequestBody;
}
export declare class IssuesRemoveAssigneesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    issueSimple?: shared.IssueSimple;
}
