import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeDbSnapshotsActionEnum {
    DescribeDbSnapshots = "DescribeDBSnapshots"
}

export enum PostDescribeDbSnapshotsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}


export class PostDescribeDbSnapshotsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeDbSnapshotsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeDbSnapshotsVersionEnum;
}


export class PostDescribeDbSnapshotsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class PostDescribeDbSnapshotsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeDbSnapshotsQueryParams;

  @Metadata()
  headers: PostDescribeDbSnapshotsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeDbSnapshotsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
