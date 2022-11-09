import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRestoreDbInstanceFromDbSnapshotActionEnum {
    RestoreDbInstanceFromDbSnapshot = "RestoreDBInstanceFromDBSnapshot"
}

export enum GetRestoreDbInstanceFromDbSnapshotVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetRestoreDbInstanceFromDbSnapshotQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRestoreDbInstanceFromDbSnapshotActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" })
  dbInstanceClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBName" })
  dbName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSnapshotIdentifier" })
  dbSnapshotIdentifier: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRestoreDbInstanceFromDbSnapshotVersionEnum;
}


export class GetRestoreDbInstanceFromDbSnapshotHeaders extends SpeakeasyBase {
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


export class GetRestoreDbInstanceFromDbSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRestoreDbInstanceFromDbSnapshotQueryParams;

  @Metadata()
  headers: GetRestoreDbInstanceFromDbSnapshotHeaders;
}


export class GetRestoreDbInstanceFromDbSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
