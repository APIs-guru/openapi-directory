import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListLabelsForMilestonePathParams extends SpeakeasyBase {
    milestoneNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesListLabelsForMilestoneQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class IssuesListLabelsForMilestoneRequest extends SpeakeasyBase {
    pathParams: IssuesListLabelsForMilestonePathParams;
    queryParams: IssuesListLabelsForMilestoneQueryParams;
}
export declare class IssuesListLabelsForMilestoneResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    labels?: shared.Label[];
}
