import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCopyDbSnapshotActionEnum {
    CopyDbSnapshot = "CopyDBSnapshot"
}

export enum GetCopyDbSnapshotVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetCopyDbSnapshotQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCopyDbSnapshotActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceDBSnapshotIdentifier" })
  sourceDbSnapshotIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetDBSnapshotIdentifier" })
  targetDbSnapshotIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCopyDbSnapshotVersionEnum;
}


export class GetCopyDbSnapshotHeaders extends SpeakeasyBase {
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


export class GetCopyDbSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCopyDbSnapshotQueryParams;

  @SpeakeasyMetadata()
  headers: GetCopyDbSnapshotHeaders;
}


export class GetCopyDbSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
