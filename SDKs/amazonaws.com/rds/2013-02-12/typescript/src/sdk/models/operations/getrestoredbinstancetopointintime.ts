import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRestoreDbInstanceToPointInTimeActionEnum {
    RestoreDbInstanceToPointInTime = "RestoreDBInstanceToPointInTime"
}

export enum GetRestoreDbInstanceToPointInTimeVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetRestoreDbInstanceToPointInTimeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRestoreDbInstanceToPointInTimeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" })
  dbInstanceClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBName" })
  dbName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" })
  dbSubnetGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Engine" })
  engine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Iops" })
  iops?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LicenseModel" })
  licenseModel?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MultiAZ" })
  multiAz?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" })
  optionGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Port" })
  port?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RestoreTime" })
  restoreTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceDBInstanceIdentifier" })
  sourceDbInstanceIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetDBInstanceIdentifier" })
  targetDbInstanceIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UseLatestRestorableTime" })
  useLatestRestorableTime?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRestoreDbInstanceToPointInTimeVersionEnum;
}


export class GetRestoreDbInstanceToPointInTimeHeaders extends SpeakeasyBase {
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


export class GetRestoreDbInstanceToPointInTimeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRestoreDbInstanceToPointInTimeQueryParams;

  @Metadata()
  headers: GetRestoreDbInstanceToPointInTimeHeaders;
}


export class GetRestoreDbInstanceToPointInTimeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
