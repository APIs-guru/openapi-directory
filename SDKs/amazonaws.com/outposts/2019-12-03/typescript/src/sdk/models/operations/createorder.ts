import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateOrderHeaders extends SpeakeasyBase {
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

export enum CreateOrderRequestBodyPaymentOptionEnum {
    AllUpfront = "ALL_UPFRONT",
    NoUpfront = "NO_UPFRONT",
    PartialUpfront = "PARTIAL_UPFRONT"
}

export enum CreateOrderRequestBodyPaymentTermEnum {
    ThreeYears = "THREE_YEARS"
}


export class CreateOrderRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LineItems", elemType: shared.LineItemRequest })
  lineItems: shared.LineItemRequest[];

  @SpeakeasyMetadata({ data: "json, name=OutpostIdentifier" })
  outpostIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentOption" })
  paymentOption: CreateOrderRequestBodyPaymentOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=PaymentTerm" })
  paymentTerm?: CreateOrderRequestBodyPaymentTermEnum;
}


export class CreateOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateOrderHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateOrderRequestBody;
}


export class CreateOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createOrderOutput?: shared.CreateOrderOutput;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
