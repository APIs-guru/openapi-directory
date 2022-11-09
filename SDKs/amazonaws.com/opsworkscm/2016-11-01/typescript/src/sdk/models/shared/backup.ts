import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupTypeEnum } from "./backuptypeenum";
import { BackupStatusEnum } from "./backupstatusenum";


// Backup
/** 
 * Describes a single backup. 
**/
export class Backup extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupArn" })
  backupArn?: string;

  @Metadata({ data: "json, name=BackupId" })
  backupId?: string;

  @Metadata({ data: "json, name=BackupType" })
  backupType?: BackupTypeEnum;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Engine" })
  engine?: string;

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

  @Metadata({ data: "json, name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @Metadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=S3DataSize" })
  s3DataSize?: number;

  @Metadata({ data: "json, name=S3DataUrl" })
  s3DataUrl?: string;

  @Metadata({ data: "json, name=S3LogUrl" })
  s3LogUrl?: string;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;

  @Metadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: BackupStatusEnum;

  @Metadata({ data: "json, name=StatusDescription" })
  statusDescription?: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=ToolsVersion" })
  toolsVersion?: string;

  @Metadata({ data: "json, name=UserArn" })
  userArn?: string;
}
