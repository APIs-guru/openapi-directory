import { SpeakeasyBase } from "../../../internal/utils";
export declare class DailyActiveUsersByDateQueryParams extends SpeakeasyBase {
    appId?: string;
    endingAt?: string;
    length?: string;
}
export declare class DailyActiveUsersByDateRequest extends SpeakeasyBase {
    queryParams: DailyActiveUsersByDateQueryParams;
}
export declare class DailyActiveUsersByDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
