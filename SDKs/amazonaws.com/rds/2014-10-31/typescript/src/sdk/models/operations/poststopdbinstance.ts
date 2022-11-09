import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostStopDbInstanceActionEnum {
    StopDbInstance = "StopDBInstance"
}

export enum PostStopDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostStopDbInstanceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostStopDbInstanceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostStopDbInstanceVersionEnum;
}


export class PostStopDbInstanceHeaders extends SpeakeasyBase {
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


export class PostStopDbInstanceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostStopDbInstanceQueryParams;

  @Metadata()
  headers: PostStopDbInstanceHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostStopDbInstanceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
