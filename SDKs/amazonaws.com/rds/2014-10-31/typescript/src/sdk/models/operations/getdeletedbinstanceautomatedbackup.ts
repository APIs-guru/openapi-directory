import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteDbInstanceAutomatedBackupActionEnum {
    DeleteDbInstanceAutomatedBackup = "DeleteDBInstanceAutomatedBackup"
}

export enum GetDeleteDbInstanceAutomatedBackupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDeleteDbInstanceAutomatedBackupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteDbInstanceAutomatedBackupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceAutomatedBackupsArn" })
  dbInstanceAutomatedBackupsArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DbiResourceId" })
  dbiResourceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteDbInstanceAutomatedBackupVersionEnum;
}


export class GetDeleteDbInstanceAutomatedBackupHeaders extends SpeakeasyBase {
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


export class GetDeleteDbInstanceAutomatedBackupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteDbInstanceAutomatedBackupQueryParams;

  @Metadata()
  headers: GetDeleteDbInstanceAutomatedBackupHeaders;
}


export class GetDeleteDbInstanceAutomatedBackupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
