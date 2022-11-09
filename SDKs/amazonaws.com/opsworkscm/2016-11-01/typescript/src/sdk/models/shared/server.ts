import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EngineAttribute } from "./engineattribute";
import { MaintenanceStatusEnum } from "./maintenancestatusenum";
import { ServerStatusEnum } from "./serverstatusenum";


// Server
/** 
 * Describes a configuration management server. 
**/
export class Server extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociatePublicIpAddress" })
  associatePublicIpAddress?: boolean;

  @Metadata({ data: "json, name=BackupRetentionCount" })
  backupRetentionCount?: number;

  @Metadata({ data: "json, name=CloudFormationStackArn" })
  cloudFormationStackArn?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=CustomDomain" })
  customDomain?: string;

  @Metadata({ data: "json, name=DisableAutomatedBackup" })
  disableAutomatedBackup?: boolean;

  @Metadata({ data: "json, name=Endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=Engine" })
  engine?: string;

  @Metadata({ data: "json, name=EngineAttributes", elemType: shared.EngineAttribute })
  engineAttributes?: EngineAttribute[];

  @Metadata({ data: "json, name=EngineModel" })
  engineModel?: string;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=InstanceProfileArn" })
  instanceProfileArn?: string;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=KeyPair" })
  keyPair?: string;

  @Metadata({ data: "json, name=MaintenanceStatus" })
  maintenanceStatus?: MaintenanceStatusEnum;

  @Metadata({ data: "json, name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @Metadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=ServerArn" })
  serverArn?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;

  @Metadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ServerStatusEnum;

  @Metadata({ data: "json, name=StatusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}
