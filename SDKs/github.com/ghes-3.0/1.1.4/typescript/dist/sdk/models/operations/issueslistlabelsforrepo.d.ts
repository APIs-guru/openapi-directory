import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListLabelsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class IssuesListLabelsForRepoQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class IssuesListLabelsForRepoRequest extends SpeakeasyBase {
    pathParams: IssuesListLabelsForRepoPathParams;
    queryParams: IssuesListLabelsForRepoQueryParams;
}
export declare class IssuesListLabelsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    labels?: shared.Label[];
}
