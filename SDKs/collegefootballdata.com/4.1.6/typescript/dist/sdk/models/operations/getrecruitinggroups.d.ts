import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRecruitingGroupsQueryParams extends SpeakeasyBase {
    conference?: string;
    endYear?: number;
    startYear?: number;
    team?: string;
}
export declare class GetRecruitingGroupsRequest extends SpeakeasyBase {
    queryParams: GetRecruitingGroupsQueryParams;
}
export declare class GetRecruitingGroupsResponse extends SpeakeasyBase {
    contentType: string;
    positionGroupRecruitingRatings?: shared.PositionGroupRecruitingRating[];
    statusCode: number;
}
