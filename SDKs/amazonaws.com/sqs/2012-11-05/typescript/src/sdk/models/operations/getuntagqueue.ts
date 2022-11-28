import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUntagQueuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetUntagQueueActionEnum {
    UntagQueue = "UntagQueue"
}

export enum GetUntagQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetUntagQueueQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUntagQueueActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUntagQueueVersionEnum;
}


export class GetUntagQueueHeaders extends SpeakeasyBase {
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


export class GetUntagQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUntagQueuePathParams;

  @SpeakeasyMetadata()
  queryParams: GetUntagQueueQueryParams;

  @SpeakeasyMetadata()
  headers: GetUntagQueueHeaders;
}


export class GetUntagQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
