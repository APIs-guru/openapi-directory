import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetStartDbInstanceAutomatedBackupsReplicationActionEnum {
    StartDbInstanceAutomatedBackupsReplication = "StartDBInstanceAutomatedBackupsReplication"
}

export enum GetStartDbInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetStartDbInstanceAutomatedBackupsReplicationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStartDbInstanceAutomatedBackupsReplicationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PreSignedUrl" })
  preSignedUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceDBInstanceArn" })
  sourceDbInstanceArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStartDbInstanceAutomatedBackupsReplicationVersionEnum;
}


export class GetStartDbInstanceAutomatedBackupsReplicationHeaders extends SpeakeasyBase {
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


export class GetStartDbInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStartDbInstanceAutomatedBackupsReplicationQueryParams;

  @SpeakeasyMetadata()
  headers: GetStartDbInstanceAutomatedBackupsReplicationHeaders;
}


export class GetStartDbInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
