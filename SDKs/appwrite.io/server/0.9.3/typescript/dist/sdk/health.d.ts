import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Health {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * healthGet - Get HTTP
     *
     * Check the Appwrite HTTP server is up and responsive.
    **/
    healthGet(req: operations.HealthGetRequest, config?: AxiosRequestConfig): Promise<operations.HealthGetResponse>;
    /**
     * healthGetAntiVirus - Get Anti virus
     *
     * Check the Appwrite Anti Virus server is up and connection is successful.
    **/
    healthGetAntiVirus(req: operations.HealthGetAntiVirusRequest, config?: AxiosRequestConfig): Promise<operations.HealthGetAntiVirusResponse>;
    /**
     * healthGetCache - Get Cache
     *
     * Check the Appwrite in-memory cache server is up and connection is successful.
    **/
    healthGetCache(req: operations.HealthGetCacheRequest, config?: AxiosRequestConfig): Promise<operations.HealthGetCacheResponse>;
    /**
     * healthGetDb - Get DB
     *
     * Check the Appwrite database server is up and connection is successful.
    **/
    healthGetDb(req: operations.HealthGetDbRequest, config?: AxiosRequestConfig): Promise<operations.HealthGetDbResponse>;
    /**
     * healthGetQueueCertificates - Get Certificate Queue
     *
     * Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.
    **/
    healthGetQueueCertificates(req: operations.HealthGetQueueCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.HealthGetQueueCertificatesResponse>;
    /**
     * healthGetQueueFunctions - Get Functions Queue
    **/
    healthGetQueueFunctions(req: operations.HealthGetQueueFunctionsRequest, config?: AxiosRequestConfig): Promise<operations.HealthGetQueueFunctionsResponse>;
    /**
     * healthGetQueueLogs - Get Logs Queue
     *
     * Get the number of logs that are waiting to be processed in the Appwrite internal queue server.
    **/
    healthGetQueueLogs(req: operations.HealthGetQueueLogsRequest, config?: AxiosRequestConfig): Promise<operations.HealthGetQueueLogsResponse>;
    /**
     * healthGetQueueTasks - Get Tasks Queue
     *
     * Get the number of tasks that are waiting to be processed in the Appwrite internal queue server.
    **/
    healthGetQueueTasks(req: operations.HealthGetQueueTasksRequest, config?: AxiosRequestConfig): Promise<operations.HealthGetQueueTasksResponse>;
    /**
     * healthGetQueueUsage - Get Usage Queue
     *
     * Get the number of usage stats that are waiting to be processed in the Appwrite internal queue server.
    **/
    healthGetQueueUsage(req: operations.HealthGetQueueUsageRequest, config?: AxiosRequestConfig): Promise<operations.HealthGetQueueUsageResponse>;
    /**
     * healthGetQueueWebhooks - Get Webhooks Queue
     *
     * Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.
    **/
    healthGetQueueWebhooks(req: operations.HealthGetQueueWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.HealthGetQueueWebhooksResponse>;
    /**
     * healthGetStorageLocal - Get Local Storage
     *
     * Check the Appwrite local storage device is up and connection is successful.
    **/
    healthGetStorageLocal(req: operations.HealthGetStorageLocalRequest, config?: AxiosRequestConfig): Promise<operations.HealthGetStorageLocalResponse>;
    /**
     * healthGetTime - Get Time
     *
     * Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.
    **/
    healthGetTime(req: operations.HealthGetTimeRequest, config?: AxiosRequestConfig): Promise<operations.HealthGetTimeResponse>;
}
