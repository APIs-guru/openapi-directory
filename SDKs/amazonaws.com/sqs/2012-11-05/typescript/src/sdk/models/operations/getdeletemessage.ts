import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeleteMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetDeleteMessageActionEnum {
    DeleteMessage = "DeleteMessage"
}

export enum GetDeleteMessageVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetDeleteMessageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteMessageActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReceiptHandle" })
  receiptHandle: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteMessageVersionEnum;
}


export class GetDeleteMessageHeaders extends SpeakeasyBase {
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


export class GetDeleteMessageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeleteMessagePathParams;

  @Metadata()
  queryParams: GetDeleteMessageQueryParams;

  @Metadata()
  headers: GetDeleteMessageHeaders;
}


export class GetDeleteMessageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
