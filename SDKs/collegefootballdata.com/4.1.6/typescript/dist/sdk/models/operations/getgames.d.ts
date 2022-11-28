import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGamesQueryParams extends SpeakeasyBase {
    away?: string;
    conference?: string;
    home?: string;
    id?: number;
    seasonType?: string;
    team?: string;
    week?: number;
    year: number;
}
export declare class GetGamesRequest extends SpeakeasyBase {
    queryParams: GetGamesQueryParams;
}
export declare class GetGamesResponse extends SpeakeasyBase {
    contentType: string;
    games?: shared.Game[];
    statusCode: number;
}
