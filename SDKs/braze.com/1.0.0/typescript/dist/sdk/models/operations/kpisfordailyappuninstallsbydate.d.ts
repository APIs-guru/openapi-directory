import { SpeakeasyBase } from "../../../internal/utils";
export declare class KpIsForDailyAppUninstallsByDateQueryParams extends SpeakeasyBase {
    appId?: string;
    endingAt?: string;
    length?: string;
}
export declare class KpIsForDailyAppUninstallsByDateRequest extends SpeakeasyBase {
    queryParams: KpIsForDailyAppUninstallsByDateQueryParams;
}
export declare class KpIsForDailyAppUninstallsByDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
