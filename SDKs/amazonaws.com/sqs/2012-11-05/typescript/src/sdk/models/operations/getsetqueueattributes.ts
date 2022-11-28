import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetQueueAttributesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetSetQueueAttributesActionEnum {
    SetQueueAttributes = "SetQueueAttributes"
}

export enum GetSetQueueAttributesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetSetQueueAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetQueueAttributesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: Map<string, string>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetQueueAttributesVersionEnum;
}


export class GetSetQueueAttributesHeaders extends SpeakeasyBase {
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


export class GetSetQueueAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetQueueAttributesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSetQueueAttributesQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetQueueAttributesHeaders;
}


export class GetSetQueueAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
