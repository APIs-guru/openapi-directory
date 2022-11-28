import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1PurchasesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV1PurchasesIdRequest extends SpeakeasyBase {
    pathParams: GetV1PurchasesIdPathParams;
}
export declare class GetV1PurchasesIdResponse extends SpeakeasyBase {
    contentType: string;
    purchaseDto?: shared.PurchaseDto;
    statusCode: number;
}
