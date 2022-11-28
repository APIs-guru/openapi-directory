import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineAttribute } from "./engineattribute";
import { MaintenanceStatusEnum } from "./maintenancestatusenum";
import { ServerStatusEnum } from "./serverstatusenum";



// Server
/** 
 * Describes a configuration management server. 
**/
export class Server extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociatePublicIpAddress" })
  associatePublicIpAddress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=BackupRetentionCount" })
  backupRetentionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CloudFormationStackArn" })
  cloudFormationStackArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=CustomDomain" })
  customDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=DisableAutomatedBackup" })
  disableAutomatedBackup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=Engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineAttributes", elemType: EngineAttribute })
  engineAttributes?: EngineAttribute[];

  @SpeakeasyMetadata({ data: "json, name=EngineModel" })
  engineModel?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceProfileArn" })
  instanceProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyPair" })
  keyPair?: string;

  @SpeakeasyMetadata({ data: "json, name=MaintenanceStatus" })
  maintenanceStatus?: MaintenanceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ServerArn" })
  serverArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ServerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}
