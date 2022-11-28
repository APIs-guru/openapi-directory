import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostBatchDeleteAttributesActionEnum {
    BatchDeleteAttributes = "BatchDeleteAttributes"
}

export enum PostBatchDeleteAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class PostBatchDeleteAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostBatchDeleteAttributesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostBatchDeleteAttributesVersionEnum;
}


export class PostBatchDeleteAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostBatchDeleteAttributesQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostBatchDeleteAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
