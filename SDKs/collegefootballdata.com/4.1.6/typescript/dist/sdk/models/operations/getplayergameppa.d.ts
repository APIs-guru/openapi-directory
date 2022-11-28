import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlayerGamePpaQueryParams extends SpeakeasyBase {
    excludeGarbageTime?: boolean;
    playerId?: number;
    position?: string;
    seasonType?: string;
    team?: string;
    threshold?: string;
    week?: number;
    year?: number;
}
export declare class GetPlayerGamePpaRequest extends SpeakeasyBase {
    queryParams: GetPlayerGamePpaQueryParams;
}
export declare class GetPlayerGamePpaResponse extends SpeakeasyBase {
    contentType: string;
    playerGamePpas?: shared.PlayerGamePpa[];
    statusCode: number;
}
