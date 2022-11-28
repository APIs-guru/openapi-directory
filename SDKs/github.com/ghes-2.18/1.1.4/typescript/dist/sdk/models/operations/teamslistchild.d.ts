import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListChildPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsListChildQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class TeamsListChildRequest extends SpeakeasyBase {
    pathParams: TeamsListChildPathParams;
    queryParams: TeamsListChildQueryParams;
}
export declare class TeamsListChildResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    team2s?: shared.Team2[];
}
