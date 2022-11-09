import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostCreateEndpointAccessActionEnum {
    CreateEndpointAccess = "CreateEndpointAccess"
}

export enum PostCreateEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostCreateEndpointAccessQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCreateEndpointAccessActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCreateEndpointAccessVersionEnum;
}


export class PostCreateEndpointAccessHeaders extends SpeakeasyBase {
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


export class PostCreateEndpointAccessRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCreateEndpointAccessQueryParams;

  @Metadata()
  headers: PostCreateEndpointAccessHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCreateEndpointAccessResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
