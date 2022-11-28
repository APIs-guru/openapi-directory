import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDescribeDbClusterSnapshotsActionEnum {
    DescribeDbClusterSnapshots = "DescribeDBClusterSnapshots"
}

export enum PostDescribeDbClusterSnapshotsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostDescribeDbClusterSnapshotsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeDbClusterSnapshotsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeDbClusterSnapshotsVersionEnum;
}


export class PostDescribeDbClusterSnapshotsHeaders extends SpeakeasyBase {
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


export class PostDescribeDbClusterSnapshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDescribeDbClusterSnapshotsQueryParams;

  @SpeakeasyMetadata()
  headers: PostDescribeDbClusterSnapshotsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeDbClusterSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
