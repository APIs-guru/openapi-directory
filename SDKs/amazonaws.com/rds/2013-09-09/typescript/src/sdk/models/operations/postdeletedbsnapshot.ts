import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDeleteDbSnapshotActionEnum {
    DeleteDbSnapshot = "DeleteDBSnapshot"
}

export enum PostDeleteDbSnapshotVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}


export class PostDeleteDbSnapshotQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteDbSnapshotActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteDbSnapshotVersionEnum;
}


export class PostDeleteDbSnapshotHeaders extends SpeakeasyBase {
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


export class PostDeleteDbSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDeleteDbSnapshotQueryParams;

  @SpeakeasyMetadata()
  headers: PostDeleteDbSnapshotHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteDbSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
