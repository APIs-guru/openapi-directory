import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostStopDbInstanceAutomatedBackupsReplicationActionEnum {
    StopDbInstanceAutomatedBackupsReplication = "StopDBInstanceAutomatedBackupsReplication"
}

export enum PostStopDbInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostStopDbInstanceAutomatedBackupsReplicationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostStopDbInstanceAutomatedBackupsReplicationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostStopDbInstanceAutomatedBackupsReplicationVersionEnum;
}


export class PostStopDbInstanceAutomatedBackupsReplicationHeaders extends SpeakeasyBase {
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


export class PostStopDbInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostStopDbInstanceAutomatedBackupsReplicationQueryParams;

  @SpeakeasyMetadata()
  headers: PostStopDbInstanceAutomatedBackupsReplicationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostStopDbInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
