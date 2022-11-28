import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetStopDbInstanceAutomatedBackupsReplicationActionEnum {
    StopDbInstanceAutomatedBackupsReplication = "StopDBInstanceAutomatedBackupsReplication"
}

export enum GetStopDbInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetStopDbInstanceAutomatedBackupsReplicationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStopDbInstanceAutomatedBackupsReplicationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceDBInstanceArn" })
  sourceDbInstanceArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStopDbInstanceAutomatedBackupsReplicationVersionEnum;
}


export class GetStopDbInstanceAutomatedBackupsReplicationHeaders extends SpeakeasyBase {
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


export class GetStopDbInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStopDbInstanceAutomatedBackupsReplicationQueryParams;

  @SpeakeasyMetadata()
  headers: GetStopDbInstanceAutomatedBackupsReplicationHeaders;
}


export class GetStopDbInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
