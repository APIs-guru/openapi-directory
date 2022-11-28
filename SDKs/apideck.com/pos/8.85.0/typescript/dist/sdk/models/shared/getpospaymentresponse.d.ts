import { SpeakeasyBase } from "../../../internal/utils";
import { PosPayment } from "./pospayment";
export declare class GetPosPaymentResponse extends SpeakeasyBase {
    data: PosPayment;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
