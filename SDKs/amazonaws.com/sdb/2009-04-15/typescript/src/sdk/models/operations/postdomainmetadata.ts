import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDomainMetadataActionEnum {
    DomainMetadata = "DomainMetadata"
}

export enum PostDomainMetadataVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class PostDomainMetadataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDomainMetadataActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDomainMetadataVersionEnum;
}


export class PostDomainMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDomainMetadataQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDomainMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
