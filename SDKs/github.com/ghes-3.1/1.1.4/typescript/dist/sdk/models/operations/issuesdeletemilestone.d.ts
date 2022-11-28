import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesDeleteMilestonePathParams extends SpeakeasyBase {
    milestoneNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesDeleteMilestoneRequest extends SpeakeasyBase {
    pathParams: IssuesDeleteMilestonePathParams;
}
export declare class IssuesDeleteMilestoneResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
