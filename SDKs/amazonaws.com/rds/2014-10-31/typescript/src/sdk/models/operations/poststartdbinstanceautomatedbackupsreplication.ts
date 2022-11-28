import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostStartDbInstanceAutomatedBackupsReplicationActionEnum {
    StartDbInstanceAutomatedBackupsReplication = "StartDBInstanceAutomatedBackupsReplication"
}

export enum PostStartDbInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostStartDbInstanceAutomatedBackupsReplicationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostStartDbInstanceAutomatedBackupsReplicationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostStartDbInstanceAutomatedBackupsReplicationVersionEnum;
}


export class PostStartDbInstanceAutomatedBackupsReplicationHeaders extends SpeakeasyBase {
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


export class PostStartDbInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostStartDbInstanceAutomatedBackupsReplicationQueryParams;

  @SpeakeasyMetadata()
  headers: PostStartDbInstanceAutomatedBackupsReplicationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostStartDbInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
