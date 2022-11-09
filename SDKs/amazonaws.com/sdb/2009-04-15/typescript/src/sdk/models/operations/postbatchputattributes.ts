import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostBatchPutAttributesActionEnum {
    BatchPutAttributes = "BatchPutAttributes"
}

export enum PostBatchPutAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class PostBatchPutAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostBatchPutAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostBatchPutAttributesVersionEnum;
}


export class PostBatchPutAttributesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostBatchPutAttributesQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostBatchPutAttributesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
