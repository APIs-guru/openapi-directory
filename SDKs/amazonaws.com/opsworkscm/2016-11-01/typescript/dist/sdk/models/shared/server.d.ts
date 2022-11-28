import { SpeakeasyBase } from "../../../internal/utils";
import { EngineAttribute } from "./engineattribute";
import { MaintenanceStatusEnum } from "./maintenancestatusenum";
import { ServerStatusEnum } from "./serverstatusenum";
/**
 * Describes a configuration management server.
**/
export declare class Server extends SpeakeasyBase {
    associatePublicIpAddress?: boolean;
    backupRetentionCount?: number;
    cloudFormationStackArn?: string;
    createdAt?: Date;
    customDomain?: string;
    disableAutomatedBackup?: boolean;
    endpoint?: string;
    engine?: string;
    engineAttributes?: EngineAttribute[];
    engineModel?: string;
    engineVersion?: string;
    instanceProfileArn?: string;
    instanceType?: string;
    keyPair?: string;
    maintenanceStatus?: MaintenanceStatusEnum;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    securityGroupIds?: string[];
    serverArn?: string;
    serverName?: string;
    serviceRoleArn?: string;
    status?: ServerStatusEnum;
    statusReason?: string;
    subnetIds?: string[];
}
