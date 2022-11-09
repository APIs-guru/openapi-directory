import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetStopDbInstanceAutomatedBackupsReplicationActionEnum {
    StopDbInstanceAutomatedBackupsReplication = "StopDBInstanceAutomatedBackupsReplication"
}

export enum GetStopDbInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetStopDbInstanceAutomatedBackupsReplicationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStopDbInstanceAutomatedBackupsReplicationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceDBInstanceArn" })
  sourceDbInstanceArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStopDbInstanceAutomatedBackupsReplicationVersionEnum;
}


export class GetStopDbInstanceAutomatedBackupsReplicationHeaders extends SpeakeasyBase {
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


export class GetStopDbInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStopDbInstanceAutomatedBackupsReplicationQueryParams;

  @Metadata()
  headers: GetStopDbInstanceAutomatedBackupsReplicationHeaders;
}


export class GetStopDbInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
