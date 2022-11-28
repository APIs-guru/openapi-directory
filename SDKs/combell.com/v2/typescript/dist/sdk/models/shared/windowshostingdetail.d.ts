import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationPool } from "./applicationpool";
import { WindowsIpTypeEnum } from "./windowsiptypeenum";
import { WindowsSite } from "./windowssite";
export declare class WindowsHostingDetail extends SpeakeasyBase {
    actualSize?: number;
    applicationPool?: ApplicationPool;
    domainName?: string;
    ftpUsername?: string;
    ip?: string;
    ipType?: WindowsIpTypeEnum;
    maxSize?: number;
    mssqlDatabaseNames?: string[];
    servicepackId?: number;
    sites?: WindowsSite[];
}
