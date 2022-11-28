import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesCreateMilestonePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum IssuesCreateMilestoneRequestBodyStateEnum {
    Open = "open",
    Closed = "closed"
}
export declare class IssuesCreateMilestoneRequestBody extends SpeakeasyBase {
    description?: string;
    dueOn?: string;
    state?: IssuesCreateMilestoneRequestBodyStateEnum;
    title: string;
}
export declare class IssuesCreateMilestoneRequest extends SpeakeasyBase {
    pathParams: IssuesCreateMilestonePathParams;
    request?: IssuesCreateMilestoneRequestBody;
}
export declare class IssuesCreateMilestoneResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    milestone?: shared.Milestone;
    validationError?: shared.ValidationError;
}
