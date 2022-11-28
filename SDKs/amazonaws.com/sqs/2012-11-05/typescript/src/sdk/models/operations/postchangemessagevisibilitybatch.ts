import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostChangeMessageVisibilityBatchActionEnum {
    ChangeMessageVisibilityBatch = "ChangeMessageVisibilityBatch"
}

export enum PostChangeMessageVisibilityBatchVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class PostChangeMessageVisibilityBatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostChangeMessageVisibilityBatchActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostChangeMessageVisibilityBatchVersionEnum;
}


export class PostChangeMessageVisibilityBatchHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class PostChangeMessageVisibilityBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostChangeMessageVisibilityBatchQueryParams;

  @SpeakeasyMetadata()
  headers: PostChangeMessageVisibilityBatchHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostChangeMessageVisibilityBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
