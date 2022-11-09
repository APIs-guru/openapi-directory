import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDrivesQueryParams extends SpeakeasyBase {
    conference?: string;
    defense?: string;
    defenseConference?: string;
    offense?: string;
    offenseConference?: string;
    seasonType?: string;
    team?: string;
    week?: number;
    year: number;
}
export declare class GetDrivesRequest extends SpeakeasyBase {
    queryParams: GetDrivesQueryParams;
}
export declare class GetDrivesResponse extends SpeakeasyBase {
    contentType: string;
    drives?: shared.Drive[];
    statusCode: number;
}
