import { SpeakeasyBase } from "../../../internal/utils";
export declare class DailyNewUsersByDateQueryParams extends SpeakeasyBase {
    appId?: string;
    endingAt?: string;
    length?: string;
}
export declare class DailyNewUsersByDateRequest extends SpeakeasyBase {
    queryParams: DailyNewUsersByDateQueryParams;
}
export declare class DailyNewUsersByDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
