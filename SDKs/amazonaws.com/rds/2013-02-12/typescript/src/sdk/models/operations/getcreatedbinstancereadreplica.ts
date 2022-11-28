import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateDbInstanceReadReplicaActionEnum {
    CreateDbInstanceReadReplica = "CreateDBInstanceReadReplica"
}

export enum GetCreateDbInstanceReadReplicaVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetCreateDbInstanceReadReplicaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateDbInstanceReadReplicaActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" })
  dbInstanceClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" })
  optionGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceDBInstanceIdentifier" })
  sourceDbInstanceIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateDbInstanceReadReplicaVersionEnum;
}


export class GetCreateDbInstanceReadReplicaHeaders extends SpeakeasyBase {
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


export class GetCreateDbInstanceReadReplicaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateDbInstanceReadReplicaQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateDbInstanceReadReplicaHeaders;
}


export class GetCreateDbInstanceReadReplicaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
