import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRestoreDbInstanceFromDbSnapshotActionEnum {
    RestoreDbInstanceFromDbSnapshot = "RestoreDBInstanceFromDBSnapshot"
}

export enum GetRestoreDbInstanceFromDbSnapshotVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetRestoreDbInstanceFromDbSnapshotQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRestoreDbInstanceFromDbSnapshotActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" })
  dbInstanceClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBName" })
  dbName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSnapshotIdentifier" })
  dbSnapshotIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" })
  dbSubnetGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LicenseModel" })
  licenseModel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MultiAZ" })
  multiAz?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" })
  optionGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRestoreDbInstanceFromDbSnapshotVersionEnum;
}


export class GetRestoreDbInstanceFromDbSnapshotHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetRestoreDbInstanceFromDbSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRestoreDbInstanceFromDbSnapshotQueryParams;

  @SpeakeasyMetadata()
  headers: GetRestoreDbInstanceFromDbSnapshotHeaders;
}


export class GetRestoreDbInstanceFromDbSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
