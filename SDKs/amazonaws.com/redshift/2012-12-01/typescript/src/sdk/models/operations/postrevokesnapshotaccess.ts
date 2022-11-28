import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostRevokeSnapshotAccessActionEnum {
    RevokeSnapshotAccess = "RevokeSnapshotAccess"
}

export enum PostRevokeSnapshotAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostRevokeSnapshotAccessQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRevokeSnapshotAccessActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRevokeSnapshotAccessVersionEnum;
}


export class PostRevokeSnapshotAccessHeaders extends SpeakeasyBase {
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


export class PostRevokeSnapshotAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostRevokeSnapshotAccessQueryParams;

  @SpeakeasyMetadata()
  headers: PostRevokeSnapshotAccessHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRevokeSnapshotAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
