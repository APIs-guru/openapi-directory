import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlaysQueryParams extends SpeakeasyBase {
    conference?: string;
    defense?: string;
    defenseConference?: string;
    offense?: string;
    offenseConference?: string;
    playType?: number;
    seasonType?: string;
    team?: string;
    week: number;
    year: number;
}
export declare class GetPlaysRequest extends SpeakeasyBase {
    queryParams: GetPlaysQueryParams;
}
export declare class GetPlaysResponse extends SpeakeasyBase {
    contentType: string;
    plays?: shared.Play[];
    statusCode: number;
}
