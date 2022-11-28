import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostBatchPutAttributesActionEnum {
    BatchPutAttributes = "BatchPutAttributes"
}

export enum PostBatchPutAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class PostBatchPutAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostBatchPutAttributesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostBatchPutAttributesVersionEnum;
}


export class PostBatchPutAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostBatchPutAttributesQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostBatchPutAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
