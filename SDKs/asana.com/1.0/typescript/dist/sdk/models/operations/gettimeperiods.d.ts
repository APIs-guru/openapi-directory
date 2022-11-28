import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTimePeriodsQueryParams extends SpeakeasyBase {
    endOn?: Date;
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    startOn?: Date;
    workspace: string;
}
export declare class GetTimePeriods200ApplicationJson extends SpeakeasyBase {
    data?: shared.TimePeriodCompact[];
}
export declare class GetTimePeriodsRequest extends SpeakeasyBase {
    queryParams: GetTimePeriodsQueryParams;
}
export declare class GetTimePeriodsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTimePeriods200ApplicationJsonObject?: GetTimePeriods200ApplicationJson;
}
