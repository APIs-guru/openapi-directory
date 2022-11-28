import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineAttribute } from "./engineattribute";
import { Tag } from "./tag";



export class CreateServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociatePublicIpAddress" })
  associatePublicIpAddress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId?: string;

  @SpeakeasyMetadata({ data: "json, name=BackupRetentionCount" })
  backupRetentionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CustomCertificate" })
  customCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomDomain" })
  customDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomPrivateKey" })
  customPrivateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=DisableAutomatedBackup" })
  disableAutomatedBackup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Engine" })
  engine: string;

  @SpeakeasyMetadata({ data: "json, name=EngineAttributes", elemType: EngineAttribute })
  engineAttributes?: EngineAttribute[];

  @SpeakeasyMetadata({ data: "json, name=EngineModel" })
  engineModel?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceProfileArn" })
  instanceProfileArn: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType: string;

  @SpeakeasyMetadata({ data: "json, name=KeyPair" })
  keyPair?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
