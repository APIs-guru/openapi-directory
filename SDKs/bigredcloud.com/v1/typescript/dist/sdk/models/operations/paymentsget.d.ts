import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsGetResponse extends SpeakeasyBase {
    contentType: string;
    pageResultPaymentQueryDto?: shared.PageResultPaymentQueryDto;
    statusCode: number;
}
