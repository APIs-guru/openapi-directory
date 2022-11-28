import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeleteMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetDeleteMessageActionEnum {
    DeleteMessage = "DeleteMessage"
}

export enum GetDeleteMessageVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetDeleteMessageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteMessageActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReceiptHandle" })
  receiptHandle: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteMessageVersionEnum;
}


export class GetDeleteMessageHeaders extends SpeakeasyBase {
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


export class GetDeleteMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeleteMessagePathParams;

  @SpeakeasyMetadata()
  queryParams: GetDeleteMessageQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteMessageHeaders;
}


export class GetDeleteMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
