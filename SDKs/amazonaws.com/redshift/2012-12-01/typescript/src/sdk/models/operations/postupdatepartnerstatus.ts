import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostUpdatePartnerStatusActionEnum {
    UpdatePartnerStatus = "UpdatePartnerStatus"
}

export enum PostUpdatePartnerStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostUpdatePartnerStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostUpdatePartnerStatusActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostUpdatePartnerStatusVersionEnum;
}


export class PostUpdatePartnerStatusHeaders extends SpeakeasyBase {
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


export class PostUpdatePartnerStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostUpdatePartnerStatusQueryParams;

  @Metadata()
  headers: PostUpdatePartnerStatusHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostUpdatePartnerStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
