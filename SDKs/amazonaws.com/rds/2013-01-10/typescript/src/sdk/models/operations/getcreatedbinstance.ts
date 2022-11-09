import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateDbInstanceActionEnum {
    CreateDbInstance = "CreateDBInstance"
}

export enum GetCreateDbInstanceVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetCreateDbInstanceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateDbInstanceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AllocatedStorage" })
  allocatedStorage: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CharacterSetName" })
  characterSetName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" })
  dbInstanceClass: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBName" })
  dbName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupName" })
  dbParameterGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSecurityGroups" })
  dbSecurityGroups?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" })
  dbSubnetGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Engine" })
  engine: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Iops" })
  iops?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LicenseModel" })
  licenseModel?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MasterUserPassword" })
  masterUserPassword: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MasterUsername" })
  masterUsername: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MultiAZ" })
  multiAz?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" })
  optionGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Port" })
  port?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateDbInstanceVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}


export class GetCreateDbInstanceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetCreateDbInstanceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateDbInstanceQueryParams;

  @Metadata()
  headers: GetCreateDbInstanceHeaders;
}


export class GetCreateDbInstanceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
