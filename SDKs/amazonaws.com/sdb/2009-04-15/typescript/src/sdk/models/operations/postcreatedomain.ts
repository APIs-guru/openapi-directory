import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostCreateDomainActionEnum {
    CreateDomain = "CreateDomain"
}

export enum PostCreateDomainVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class PostCreateDomainQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCreateDomainActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCreateDomainVersionEnum;
}


export class PostCreateDomainRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCreateDomainQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCreateDomainResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
