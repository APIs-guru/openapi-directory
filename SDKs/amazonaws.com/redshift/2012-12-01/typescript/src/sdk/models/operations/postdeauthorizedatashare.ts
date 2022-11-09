import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeauthorizeDataShareActionEnum {
    DeauthorizeDataShare = "DeauthorizeDataShare"
}

export enum PostDeauthorizeDataShareVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostDeauthorizeDataShareQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeauthorizeDataShareActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeauthorizeDataShareVersionEnum;
}


export class PostDeauthorizeDataShareHeaders extends SpeakeasyBase {
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


export class PostDeauthorizeDataShareRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeauthorizeDataShareQueryParams;

  @Metadata()
  headers: PostDeauthorizeDataShareHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeauthorizeDataShareResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
