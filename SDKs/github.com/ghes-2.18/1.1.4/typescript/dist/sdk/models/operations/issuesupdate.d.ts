import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesUpdatePathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesUpdateRequestBodyLabels2 extends SpeakeasyBase {
    color?: string;
    description?: string;
    id?: number;
    name?: string;
}
export declare enum IssuesUpdateRequestBodyStateEnum {
    Open = "open",
    Closed = "closed"
}
export declare class IssuesUpdateRequestBody extends SpeakeasyBase {
    assignee?: string;
    assignees?: string[];
    body?: string;
    labels?: any[];
    milestone?: any;
    state?: IssuesUpdateRequestBodyStateEnum;
    title?: any;
}
export declare class IssuesUpdate503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class IssuesUpdateRequest extends SpeakeasyBase {
    pathParams: IssuesUpdatePathParams;
    request?: IssuesUpdateRequestBody;
}
export declare class IssuesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    issue?: shared.Issue;
    issuesUpdate503ApplicationJsonObject?: IssuesUpdate503ApplicationJson;
    validationError?: shared.ValidationError;
}
