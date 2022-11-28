import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGamePpaQueryParams extends SpeakeasyBase {
    conference?: string;
    excludeGarbageTime?: boolean;
    seasonType?: string;
    team?: string;
    week?: number;
    year: number;
}
export declare class GetGamePpaRequest extends SpeakeasyBase {
    queryParams: GetGamePpaQueryParams;
}
export declare class GetGamePpaResponse extends SpeakeasyBase {
    contentType: string;
    gamePpas?: shared.GamePpa[];
    statusCode: number;
}
