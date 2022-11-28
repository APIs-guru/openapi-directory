import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListAssigneesPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class IssuesListAssigneesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class IssuesListAssigneesRequest extends SpeakeasyBase {
    pathParams: IssuesListAssigneesPathParams;
    queryParams: IssuesListAssigneesQueryParams;
}
export declare class IssuesListAssigneesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    simpleUsers?: shared.SimpleUser[];
}
