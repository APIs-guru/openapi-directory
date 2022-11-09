import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReceiveMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetReceiveMessageActionEnum {
    ReceiveMessage = "ReceiveMessage"
}

export enum GetReceiveMessageVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetReceiveMessageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReceiveMessageActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AttributeNames" })
  attributeNames?: shared.QueueAttributeNameEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxNumberOfMessages" })
  maxNumberOfMessages?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MessageAttributeNames" })
  messageAttributeNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReceiveRequestAttemptId" })
  receiveRequestAttemptId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReceiveMessageVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VisibilityTimeout" })
  visibilityTimeout?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=WaitTimeSeconds" })
  waitTimeSeconds?: number;
}


export class GetReceiveMessageHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetReceiveMessageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReceiveMessagePathParams;

  @Metadata()
  queryParams: GetReceiveMessageQueryParams;

  @Metadata()
  headers: GetReceiveMessageHeaders;
}


export class GetReceiveMessageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
