import { SpeakeasyBase } from "../../../internal/utils";
import { LinuxIpTypeEnum } from "./linuxiptypeenum";
import { LinuxSite } from "./linuxsite";
export declare class LinuxHostingDetail extends SpeakeasyBase {
    actualSize?: number;
    domainName?: string;
    ftpEnabled?: boolean;
    ftpUsername?: string;
    ip?: string;
    ipType?: LinuxIpTypeEnum;
    maxSize?: number;
    maxWebspaceSize?: number;
    mysqlDatabaseNames?: string[];
    phpVersion?: string;
    servicepackId?: number;
    sites?: LinuxSite[];
    sshHost?: string;
    sshUsername?: string;
    webspaceUsage?: number;
}
