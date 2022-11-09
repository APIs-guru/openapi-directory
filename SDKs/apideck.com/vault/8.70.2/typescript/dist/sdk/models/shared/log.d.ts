import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The request as defined in OpenApi Spec.
**/
export declare class LogOperation extends SpeakeasyBase {
    id: string;
    name: string;
}
/**
 * Apideck service provider associated with request.
**/
export declare class LogService extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare enum LogUnifiedApiEnum {
    Crm = "crm",
    Lead = "lead",
    Proxy = "proxy",
    Vault = "vault",
    Accounting = "accounting",
    Hris = "hris",
    Ats = "ats",
    Pos = "pos",
    FileStorage = "file-storage",
    Sms = "sms"
}
export declare class Log extends SpeakeasyBase {
    apiStyle: string;
    baseUrl: string;
    childRequest: boolean;
    consumerId: string;
    duration: number;
    errorMessage?: string;
    execution: number;
    hasChildren: boolean;
    httpMethod: string;
    id: string;
    latency: number;
    operation: LogOperation;
    parentId: string;
    path: string;
    sandbox: boolean;
    service: LogService;
    sourceIp?: string;
    statusCode: number;
    success: boolean;
    timestamp: string;
    unifiedApi: LogUnifiedApiEnum;
}
