import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateOrderHeaders extends SpeakeasyBase {
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

export enum CreateOrderRequestBodyPaymentOptionEnum {
    AllUpfront = "ALL_UPFRONT"
,    NoUpfront = "NO_UPFRONT"
,    PartialUpfront = "PARTIAL_UPFRONT"
}

export enum CreateOrderRequestBodyPaymentTermEnum {
    ThreeYears = "THREE_YEARS"
}


export class CreateOrderRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=LineItems", elemType: shared.LineItemRequest })
  lineItems: shared.LineItemRequest[];

  @Metadata({ data: "json, name=OutpostIdentifier" })
  outpostIdentifier: string;

  @Metadata({ data: "json, name=PaymentOption" })
  paymentOption: CreateOrderRequestBodyPaymentOptionEnum;

  @Metadata({ data: "json, name=PaymentTerm" })
  paymentTerm?: CreateOrderRequestBodyPaymentTermEnum;
}


export class CreateOrderRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateOrderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateOrderRequestBody;
}


export class CreateOrderResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createOrderOutput?: shared.CreateOrderOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
