import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesCreatePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class IssuesCreateRequestBodyLabels2 extends SpeakeasyBase {
    color?: string;
    description?: string;
    id?: number;
    name?: string;
}
export declare class IssuesCreateRequestBody extends SpeakeasyBase {
    assignee?: string;
    assignees?: string[];
    body?: string;
    labels?: any[];
    milestone?: any;
    title: any;
}
export declare class IssuesCreate503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class IssuesCreateRequest extends SpeakeasyBase {
    pathParams: IssuesCreatePathParams;
    request?: IssuesCreateRequestBody;
}
export declare class IssuesCreateResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    issue?: shared.Issue;
    issuesCreate503ApplicationJsonObject?: IssuesCreate503ApplicationJson;
    validationError?: shared.ValidationError;
}
