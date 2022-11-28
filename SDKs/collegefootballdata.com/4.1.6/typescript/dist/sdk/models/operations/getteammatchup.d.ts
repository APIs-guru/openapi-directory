import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamMatchupQueryParams extends SpeakeasyBase {
    maxYear?: number;
    minYear?: number;
    team1: string;
    team2: string;
}
export declare class GetTeamMatchupRequest extends SpeakeasyBase {
    queryParams: GetTeamMatchupQueryParams;
}
export declare class GetTeamMatchupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamMatchup?: shared.TeamMatchup;
}
