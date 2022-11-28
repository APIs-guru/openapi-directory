import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetQueueUrlActionEnum {
    GetQueueUrl = "GetQueueUrl"
}

export enum GetGetQueueUrlVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetGetQueueUrlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetQueueUrlActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=QueueName" })
  queueName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=QueueOwnerAWSAccountId" })
  queueOwnerAwsAccountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetQueueUrlVersionEnum;
}


export class GetGetQueueUrlHeaders extends SpeakeasyBase {
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


export class GetGetQueueUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetQueueUrlQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetQueueUrlHeaders;
}


export class GetGetQueueUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
