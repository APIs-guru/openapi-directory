import { SpeakeasyBase } from "../../../internal/utils";
export declare class MonthlyActiveUsersForLast30DaysQueryParams extends SpeakeasyBase {
    appId?: string;
    endingAt?: string;
    length?: string;
}
export declare class MonthlyActiveUsersForLast30DaysRequest extends SpeakeasyBase {
    queryParams: MonthlyActiveUsersForLast30DaysQueryParams;
}
export declare class MonthlyActiveUsersForLast30DaysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
