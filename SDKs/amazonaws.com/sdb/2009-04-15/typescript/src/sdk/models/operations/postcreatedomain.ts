import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostCreateDomainActionEnum {
    CreateDomain = "CreateDomain"
}

export enum PostCreateDomainVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class PostCreateDomainQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCreateDomainActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCreateDomainVersionEnum;
}


export class PostCreateDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostCreateDomainQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCreateDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
