import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReceiveMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetReceiveMessageActionEnum {
    ReceiveMessage = "ReceiveMessage"
}

export enum GetReceiveMessageVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetReceiveMessageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReceiveMessageActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AttributeNames" })
  attributeNames?: shared.QueueAttributeNameEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxNumberOfMessages" })
  maxNumberOfMessages?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MessageAttributeNames" })
  messageAttributeNames?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReceiveRequestAttemptId" })
  receiveRequestAttemptId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReceiveMessageVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VisibilityTimeout" })
  visibilityTimeout?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=WaitTimeSeconds" })
  waitTimeSeconds?: number;
}


export class GetReceiveMessageHeaders extends SpeakeasyBase {
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


export class GetReceiveMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReceiveMessagePathParams;

  @SpeakeasyMetadata()
  queryParams: GetReceiveMessageQueryParams;

  @SpeakeasyMetadata()
  headers: GetReceiveMessageHeaders;
}


export class GetReceiveMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
