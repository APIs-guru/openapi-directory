import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlayerUsageQueryParams extends SpeakeasyBase {
    conference?: string;
    excludeGarbageTime?: boolean;
    playerId?: number;
    position?: string;
    team?: string;
    year: number;
}
export declare class GetPlayerUsageRequest extends SpeakeasyBase {
    queryParams: GetPlayerUsageQueryParams;
}
export declare class GetPlayerUsageResponse extends SpeakeasyBase {
    contentType: string;
    playerUsages?: shared.PlayerUsage[];
    statusCode: number;
}
