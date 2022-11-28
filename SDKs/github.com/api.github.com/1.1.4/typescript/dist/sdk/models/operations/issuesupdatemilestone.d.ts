import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesUpdateMilestonePathParams extends SpeakeasyBase {
    milestoneNumber: number;
    owner: string;
    repo: string;
}
export declare enum IssuesUpdateMilestoneRequestBodyStateEnum {
    Open = "open",
    Closed = "closed"
}
export declare class IssuesUpdateMilestoneRequestBody extends SpeakeasyBase {
    description?: string;
    dueOn?: string;
    state?: IssuesUpdateMilestoneRequestBodyStateEnum;
    title?: string;
}
export declare class IssuesUpdateMilestoneRequest extends SpeakeasyBase {
    pathParams: IssuesUpdateMilestonePathParams;
    request?: IssuesUpdateMilestoneRequestBody;
}
export declare class IssuesUpdateMilestoneResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    milestone?: shared.Milestone;
}
