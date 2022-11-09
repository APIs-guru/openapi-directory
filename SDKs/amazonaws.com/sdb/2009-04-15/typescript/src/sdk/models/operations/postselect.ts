import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostSelectActionEnum {
    Select = "Select"
}

export enum PostSelectVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class PostSelectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSelectActionEnum;

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
  version: PostSelectVersionEnum;
}


export class PostSelectRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSelectQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSelectResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
