import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeleteHsmClientCertificateActionEnum {
    DeleteHsmClientCertificate = "DeleteHsmClientCertificate"
}

export enum PostDeleteHsmClientCertificateVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostDeleteHsmClientCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteHsmClientCertificateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteHsmClientCertificateVersionEnum;
}


export class PostDeleteHsmClientCertificateHeaders extends SpeakeasyBase {
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


export class PostDeleteHsmClientCertificateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeleteHsmClientCertificateQueryParams;

  @Metadata()
  headers: PostDeleteHsmClientCertificateHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteHsmClientCertificateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
