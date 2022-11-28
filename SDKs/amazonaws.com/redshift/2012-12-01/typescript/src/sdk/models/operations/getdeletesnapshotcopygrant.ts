import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteSnapshotCopyGrantActionEnum {
    DeleteSnapshotCopyGrant = "DeleteSnapshotCopyGrant"
}

export enum GetDeleteSnapshotCopyGrantVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeleteSnapshotCopyGrantQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteSnapshotCopyGrantActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotCopyGrantName" })
  snapshotCopyGrantName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteSnapshotCopyGrantVersionEnum;
}


export class GetDeleteSnapshotCopyGrantHeaders extends SpeakeasyBase {
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


export class GetDeleteSnapshotCopyGrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteSnapshotCopyGrantQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteSnapshotCopyGrantHeaders;
}


export class GetDeleteSnapshotCopyGrantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
