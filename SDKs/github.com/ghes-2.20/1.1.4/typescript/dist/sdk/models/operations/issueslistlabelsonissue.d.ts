import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListLabelsOnIssuePathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesListLabelsOnIssueQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class IssuesListLabelsOnIssueRequest extends SpeakeasyBase {
    pathParams: IssuesListLabelsOnIssuePathParams;
    queryParams: IssuesListLabelsOnIssueQueryParams;
}
export declare class IssuesListLabelsOnIssueResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    labels?: shared.Label[];
}
