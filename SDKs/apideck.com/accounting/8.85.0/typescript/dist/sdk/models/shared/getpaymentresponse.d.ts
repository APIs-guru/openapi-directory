import { SpeakeasyBase } from "../../../internal/utils";
import { Payment } from "./payment";
export declare class GetPaymentResponse extends SpeakeasyBase {
    data: Payment;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
