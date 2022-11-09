import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNflTeamsResponse extends SpeakeasyBase {
    contentType: string;
    draftTeams?: shared.DraftTeam[];
    statusCode: number;
}
