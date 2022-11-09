import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EngineAttribute } from "./engineattribute";
import { Tag } from "./tag";
export declare class CreateServerRequest extends SpeakeasyBase {
    associatePublicIpAddress?: boolean;
    backupId?: string;
    backupRetentionCount?: number;
    customCertificate?: string;
    customDomain?: string;
    customPrivateKey?: string;
    disableAutomatedBackup?: boolean;
    engine: string;
    engineAttributes?: EngineAttribute[];
    engineModel?: string;
    engineVersion?: string;
    instanceProfileArn: string;
    instanceType: string;
    keyPair?: string;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    securityGroupIds?: string[];
    serverName: string;
    serviceRoleArn: string;
    subnetIds?: string[];
    tags?: Tag[];
}
