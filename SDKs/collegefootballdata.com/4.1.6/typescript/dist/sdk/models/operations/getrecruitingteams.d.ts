import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRecruitingTeamsQueryParams extends SpeakeasyBase {
    team?: string;
    year?: number;
}
export declare class GetRecruitingTeamsRequest extends SpeakeasyBase {
    queryParams: GetRecruitingTeamsQueryParams;
}
export declare class GetRecruitingTeamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamRecruitingRanks?: shared.TeamRecruitingRank[];
}
