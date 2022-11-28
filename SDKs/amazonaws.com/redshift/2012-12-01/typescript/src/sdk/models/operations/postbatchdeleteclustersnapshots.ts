import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostBatchDeleteClusterSnapshotsActionEnum {
    BatchDeleteClusterSnapshots = "BatchDeleteClusterSnapshots"
}

export enum PostBatchDeleteClusterSnapshotsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostBatchDeleteClusterSnapshotsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostBatchDeleteClusterSnapshotsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostBatchDeleteClusterSnapshotsVersionEnum;
}


export class PostBatchDeleteClusterSnapshotsHeaders extends SpeakeasyBase {
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


export class PostBatchDeleteClusterSnapshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostBatchDeleteClusterSnapshotsQueryParams;

  @SpeakeasyMetadata()
  headers: PostBatchDeleteClusterSnapshotsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostBatchDeleteClusterSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
