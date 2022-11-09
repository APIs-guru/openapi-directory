import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeleteDomainActionEnum {
    DeleteDomain = "DeleteDomain"
}

export enum PostDeleteDomainVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class PostDeleteDomainQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteDomainActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteDomainVersionEnum;
}


export class PostDeleteDomainRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeleteDomainQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteDomainResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
