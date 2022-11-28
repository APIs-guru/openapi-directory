import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetParticipationStatsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetParticipationStatsRequest extends SpeakeasyBase {
    pathParams: ReposGetParticipationStatsPathParams;
}
export declare class ReposGetParticipationStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    participationStats?: shared.ParticipationStats;
}
