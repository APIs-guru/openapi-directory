import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupTypeEnum } from "./backuptypeenum";
import { BackupStatusEnum } from "./backupstatusenum";



// Backup
/** 
 * Describes a single backup. 
**/
export class Backup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupArn" })
  backupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId?: string;

  @SpeakeasyMetadata({ data: "json, name=BackupType" })
  backupType?: BackupTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Engine" })
  engine?: string;

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

  @SpeakeasyMetadata({ data: "json, name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=S3DataSize" })
  s3DataSize?: number;

  @SpeakeasyMetadata({ data: "json, name=S3DataUrl" })
  s3DataUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=S3LogUrl" })
  s3LogUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: BackupStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDescription" })
  statusDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ToolsVersion" })
  toolsVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=UserArn" })
  userArn?: string;
}
