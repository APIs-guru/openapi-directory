import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChangeMessageVisibilityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetChangeMessageVisibilityActionEnum {
    ChangeMessageVisibility = "ChangeMessageVisibility"
}

export enum GetChangeMessageVisibilityVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetChangeMessageVisibilityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetChangeMessageVisibilityActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReceiptHandle" })
  receiptHandle: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetChangeMessageVisibilityVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VisibilityTimeout" })
  visibilityTimeout: number;
}


export class GetChangeMessageVisibilityHeaders extends SpeakeasyBase {
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


export class GetChangeMessageVisibilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChangeMessageVisibilityPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChangeMessageVisibilityQueryParams;

  @SpeakeasyMetadata()
  headers: GetChangeMessageVisibilityHeaders;
}


export class GetChangeMessageVisibilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
