import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamRecordsQueryParams extends SpeakeasyBase {
    conference?: string;
    team?: string;
    year?: number;
}
export declare class GetTeamRecordsRequest extends SpeakeasyBase {
    queryParams: GetTeamRecordsQueryParams;
}
export declare class GetTeamRecordsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamRecords?: shared.TeamRecord[];
}
