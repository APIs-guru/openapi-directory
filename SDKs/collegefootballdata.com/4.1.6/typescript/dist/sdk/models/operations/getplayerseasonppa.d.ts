import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPlayerSeasonPpaQueryParams extends SpeakeasyBase {
    conference?: string;
    excludeGarbageTime?: boolean;
    playerId?: number;
    position?: string;
    team?: string;
    threshold?: string;
    year?: number;
}
export declare class GetPlayerSeasonPpaRequest extends SpeakeasyBase {
    queryParams: GetPlayerSeasonPpaQueryParams;
}
export declare class GetPlayerSeasonPpaResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonPpas?: shared.PlayerSeasonPpa[];
    statusCode: number;
}
