import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTimePeriodPathParams extends SpeakeasyBase {
    timePeriodGid: string;
}
export declare class GetTimePeriodQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTimePeriod200ApplicationJson extends SpeakeasyBase {
    data?: shared.TimePeriodResponse;
}
export declare class GetTimePeriodRequest extends SpeakeasyBase {
    pathParams: GetTimePeriodPathParams;
    queryParams: GetTimePeriodQueryParams;
}
export declare class GetTimePeriodResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTimePeriod200ApplicationJsonObject?: GetTimePeriod200ApplicationJson;
}
