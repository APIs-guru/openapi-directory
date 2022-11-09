import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetStartDbInstanceAutomatedBackupsReplicationActionEnum {
    StartDbInstanceAutomatedBackupsReplication = "StartDBInstanceAutomatedBackupsReplication"
}

export enum GetStartDbInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetStartDbInstanceAutomatedBackupsReplicationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStartDbInstanceAutomatedBackupsReplicationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PreSignedUrl" })
  preSignedUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceDBInstanceArn" })
  sourceDbInstanceArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStartDbInstanceAutomatedBackupsReplicationVersionEnum;
}


export class GetStartDbInstanceAutomatedBackupsReplicationHeaders extends SpeakeasyBase {
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


export class GetStartDbInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStartDbInstanceAutomatedBackupsReplicationQueryParams;

  @Metadata()
  headers: GetStartDbInstanceAutomatedBackupsReplicationHeaders;
}


export class GetStartDbInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
