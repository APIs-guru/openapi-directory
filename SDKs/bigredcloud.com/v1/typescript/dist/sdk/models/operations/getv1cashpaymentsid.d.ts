import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1CashPaymentsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV1CashPaymentsIdRequest extends SpeakeasyBase {
    pathParams: GetV1CashPaymentsIdPathParams;
}
export declare class GetV1CashPaymentsIdResponse extends SpeakeasyBase {
    cashPaymentDto?: shared.CashPaymentDto;
    contentType: string;
    statusCode: number;
}
