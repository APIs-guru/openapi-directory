import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecruitingPlayersQueryParams extends SpeakeasyBase {
    classification?: string;
    position?: string;
    state?: string;
    team?: string;
    year?: number;
}
export declare class GetRecruitingPlayersRequest extends SpeakeasyBase {
    queryParams: GetRecruitingPlayersQueryParams;
}
export declare class GetRecruitingPlayersResponse extends SpeakeasyBase {
    contentType: string;
    recruits?: shared.Recruit[];
    statusCode: number;
}
