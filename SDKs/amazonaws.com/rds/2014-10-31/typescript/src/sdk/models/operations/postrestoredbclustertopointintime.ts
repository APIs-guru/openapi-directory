import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostRestoreDbClusterToPointInTimeActionEnum {
    RestoreDbClusterToPointInTime = "RestoreDBClusterToPointInTime"
}

export enum PostRestoreDbClusterToPointInTimeVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostRestoreDbClusterToPointInTimeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRestoreDbClusterToPointInTimeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRestoreDbClusterToPointInTimeVersionEnum;
}


export class PostRestoreDbClusterToPointInTimeHeaders extends SpeakeasyBase {
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


export class PostRestoreDbClusterToPointInTimeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostRestoreDbClusterToPointInTimeQueryParams;

  @Metadata()
  headers: PostRestoreDbClusterToPointInTimeHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRestoreDbClusterToPointInTimeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
