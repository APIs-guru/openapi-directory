import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListEventsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class IssuesListEventsForRepoQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class IssuesListEventsForRepoRequest extends SpeakeasyBase {
    pathParams: IssuesListEventsForRepoPathParams;
    queryParams: IssuesListEventsForRepoQueryParams;
}
export declare class IssuesListEventsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    issueEvents?: shared.IssueEvent[];
    validationError?: shared.ValidationError;
}
