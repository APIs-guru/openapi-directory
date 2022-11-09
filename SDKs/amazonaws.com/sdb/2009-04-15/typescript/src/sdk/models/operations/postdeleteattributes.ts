import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeleteAttributesActionEnum {
    DeleteAttributes = "DeleteAttributes"
}

export enum PostDeleteAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class PostDeleteAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteAttributesVersionEnum;
}


export class PostDeleteAttributesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeleteAttributesQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteAttributesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
