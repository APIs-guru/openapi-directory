import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListMilestonesPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum IssuesListMilestonesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum IssuesListMilestonesSortEnum {
    DueOn = "due_on",
    Completeness = "completeness"
}
export declare enum IssuesListMilestonesStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class IssuesListMilestonesQueryParams extends SpeakeasyBase {
    direction?: IssuesListMilestonesDirectionEnum;
    page?: number;
    perPage?: number;
    sort?: IssuesListMilestonesSortEnum;
    state?: IssuesListMilestonesStateEnum;
}
export declare class IssuesListMilestonesRequest extends SpeakeasyBase {
    pathParams: IssuesListMilestonesPathParams;
    queryParams: IssuesListMilestonesQueryParams;
}
export declare class IssuesListMilestonesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    milestones?: shared.Milestone[];
}
