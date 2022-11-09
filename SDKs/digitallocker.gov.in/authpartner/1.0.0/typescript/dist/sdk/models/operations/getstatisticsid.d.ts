import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetStatisticsIdSecurity extends SpeakeasyBase {
    oauthsecurity: shared.SchemeOauthsecurity;
}
export declare class GetStatisticsIdRequest extends SpeakeasyBase {
    request?: any;
    security: GetStatisticsIdSecurity;
}
export declare class GetStatisticsId400ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetStatisticsId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetStatisticsId500ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetStatisticsIdResponse extends SpeakeasyBase {
    contentType: string;
    getStatisticsId400ApplicationJsonObject?: GetStatisticsId400ApplicationJson;
    getStatisticsId401ApplicationJsonObject?: GetStatisticsId401ApplicationJson;
    getStatisticsId500ApplicationJsonObject?: GetStatisticsId500ApplicationJson;
    getStatisticsResponse?: shared.GetStatisticsResponse;
    statusCode: number;
}
