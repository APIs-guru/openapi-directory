import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDomainMetadataActionEnum {
    DomainMetadata = "DomainMetadata"
}

export enum PostDomainMetadataVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class PostDomainMetadataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDomainMetadataActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDomainMetadataVersionEnum;
}


export class PostDomainMetadataRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDomainMetadataQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDomainMetadataResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
