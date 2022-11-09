import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostChangeMessageVisibilityActionEnum {
    ChangeMessageVisibility = "ChangeMessageVisibility"
}

export enum PostChangeMessageVisibilityVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class PostChangeMessageVisibilityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostChangeMessageVisibilityActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostChangeMessageVisibilityVersionEnum;
}


export class PostChangeMessageVisibilityHeaders extends SpeakeasyBase {
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


export class PostChangeMessageVisibilityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostChangeMessageVisibilityQueryParams;

  @Metadata()
  headers: PostChangeMessageVisibilityHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostChangeMessageVisibilityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
