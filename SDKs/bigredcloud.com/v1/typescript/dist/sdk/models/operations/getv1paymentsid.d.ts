import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1PaymentsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV1PaymentsIdRequest extends SpeakeasyBase {
    pathParams: GetV1PaymentsIdPathParams;
}
export declare class GetV1PaymentsIdResponse extends SpeakeasyBase {
    contentType: string;
    paymentDto?: shared.PaymentDto;
    statusCode: number;
}
