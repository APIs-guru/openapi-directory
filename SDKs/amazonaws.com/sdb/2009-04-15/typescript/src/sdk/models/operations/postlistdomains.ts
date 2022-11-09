import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostListDomainsActionEnum {
    ListDomains = "ListDomains"
}

export enum PostListDomainsVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class PostListDomainsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListDomainsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxNumberOfDomains" })
  maxNumberOfDomains?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListDomainsVersionEnum;
}


export class PostListDomainsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostListDomainsQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostListDomainsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
