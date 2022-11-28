import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDisableSnapshotCopyActionEnum {
    DisableSnapshotCopy = "DisableSnapshotCopy"
}

export enum PostDisableSnapshotCopyVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostDisableSnapshotCopyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDisableSnapshotCopyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDisableSnapshotCopyVersionEnum;
}


export class PostDisableSnapshotCopyHeaders extends SpeakeasyBase {
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


export class PostDisableSnapshotCopyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDisableSnapshotCopyQueryParams;

  @SpeakeasyMetadata()
  headers: PostDisableSnapshotCopyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDisableSnapshotCopyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
