import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesGetMilestonePathParams extends SpeakeasyBase {
    milestoneNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesGetMilestoneRequest extends SpeakeasyBase {
    pathParams: IssuesGetMilestonePathParams;
}
export declare class IssuesGetMilestoneResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    milestone?: shared.Milestone;
}
