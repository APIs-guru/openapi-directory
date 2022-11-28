import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1CashReceiptsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV1CashReceiptsIdRequest extends SpeakeasyBase {
    pathParams: GetV1CashReceiptsIdPathParams;
}
export declare class GetV1CashReceiptsIdResponse extends SpeakeasyBase {
    cashReceiptDto?: shared.CashReceiptDto;
    contentType: string;
    statusCode: number;
}
