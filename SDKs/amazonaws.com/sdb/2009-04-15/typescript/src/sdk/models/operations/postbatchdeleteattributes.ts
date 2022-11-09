import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostBatchDeleteAttributesActionEnum {
    BatchDeleteAttributes = "BatchDeleteAttributes"
}

export enum PostBatchDeleteAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class PostBatchDeleteAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostBatchDeleteAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostBatchDeleteAttributesVersionEnum;
}


export class PostBatchDeleteAttributesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostBatchDeleteAttributesQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostBatchDeleteAttributesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
