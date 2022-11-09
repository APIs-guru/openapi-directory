import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostEnableLoggingActionEnum {
    EnableLogging = "EnableLogging"
}

export enum PostEnableLoggingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostEnableLoggingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostEnableLoggingActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostEnableLoggingVersionEnum;
}


export class PostEnableLoggingHeaders extends SpeakeasyBase {
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


export class PostEnableLoggingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostEnableLoggingQueryParams;

  @Metadata()
  headers: PostEnableLoggingHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostEnableLoggingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
