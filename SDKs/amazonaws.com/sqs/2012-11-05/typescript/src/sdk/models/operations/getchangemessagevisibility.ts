import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChangeMessageVisibilityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetChangeMessageVisibilityActionEnum {
    ChangeMessageVisibility = "ChangeMessageVisibility"
}

export enum GetChangeMessageVisibilityVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetChangeMessageVisibilityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetChangeMessageVisibilityActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReceiptHandle" })
  receiptHandle: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetChangeMessageVisibilityVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VisibilityTimeout" })
  visibilityTimeout: number;
}


export class GetChangeMessageVisibilityHeaders extends SpeakeasyBase {
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


export class GetChangeMessageVisibilityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChangeMessageVisibilityPathParams;

  @Metadata()
  queryParams: GetChangeMessageVisibilityQueryParams;

  @Metadata()
  headers: GetChangeMessageVisibilityHeaders;
}


export class GetChangeMessageVisibilityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
