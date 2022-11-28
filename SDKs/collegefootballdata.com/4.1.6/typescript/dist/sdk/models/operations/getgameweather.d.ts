import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGameWeatherQueryParams extends SpeakeasyBase {
    conference?: string;
    seasonType?: string;
    team?: string;
    week?: number;
    year: number;
}
export declare class GetGameWeatherRequest extends SpeakeasyBase {
    queryParams: GetGameWeatherQueryParams;
}
export declare class GetGameWeatherResponse extends SpeakeasyBase {
    contentType: string;
    gameWeathers?: shared.GameWeather[];
    statusCode: number;
}
