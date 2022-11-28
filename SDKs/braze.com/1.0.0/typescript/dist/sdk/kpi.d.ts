import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Kpi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dailyActiveUsersByDate - Daily Active Users by Date
     *
     * This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.
     *
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "data" : [
     *         {
     *             "time" : (string) date as ISO 8601 date,
     *             "dau" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    dailyActiveUsersByDate(req: operations.DailyActiveUsersByDateRequest, config?: AxiosRequestConfig): Promise<operations.DailyActiveUsersByDateResponse>;
    /**
     * dailyNewUsersByDate - Daily New Users by Date
     *
     * This endpoint allows you to retrieve a daily series of the total number of new users on each date.
     *
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "data" : [
     *         {
     *             "time" : (string) date as ISO 8601 date,
     *             "new_users" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    dailyNewUsersByDate(req: operations.DailyNewUsersByDateRequest, config?: AxiosRequestConfig): Promise<operations.DailyNewUsersByDateResponse>;
    /**
     * kpIsForDailyAppUninstallsByDate - KPIs for Daily App Uninstalls by Date
     *
     * This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "data" : [
     *         {
     *             "time" : (string) date as ISO 8601 date,
     *             "uninstalls" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    kpIsForDailyAppUninstallsByDate(req: operations.KpIsForDailyAppUninstallsByDateRequest, config?: AxiosRequestConfig): Promise<operations.KpIsForDailyAppUninstallsByDateResponse>;
    /**
     * monthlyActiveUsersForLast30Days - Monthly Active Users for Last 30 Days
     *
     * This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "data" : [
     *         {
     *             "time" : (string) date as ISO 8601 date,
     *             "mau" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    monthlyActiveUsersForLast30Days(req: operations.MonthlyActiveUsersForLast30DaysRequest, config?: AxiosRequestConfig): Promise<operations.MonthlyActiveUsersForLast30DaysResponse>;
}
