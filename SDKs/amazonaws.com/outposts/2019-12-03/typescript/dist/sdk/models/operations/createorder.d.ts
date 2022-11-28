import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateOrderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateOrderRequestBodyPaymentOptionEnum {
    AllUpfront = "ALL_UPFRONT",
    NoUpfront = "NO_UPFRONT",
    PartialUpfront = "PARTIAL_UPFRONT"
}
export declare enum CreateOrderRequestBodyPaymentTermEnum {
    ThreeYears = "THREE_YEARS"
}
export declare class CreateOrderRequestBody extends SpeakeasyBase {
    lineItems: shared.LineItemRequest[];
    outpostIdentifier: string;
    paymentOption: CreateOrderRequestBodyPaymentOptionEnum;
    paymentTerm?: CreateOrderRequestBodyPaymentTermEnum;
}
export declare class CreateOrderRequest extends SpeakeasyBase {
    headers: CreateOrderHeaders;
    request: CreateOrderRequestBody;
}
export declare class CreateOrderResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createOrderOutput?: shared.CreateOrderOutput;
    internalServerException?: any;
    notFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
