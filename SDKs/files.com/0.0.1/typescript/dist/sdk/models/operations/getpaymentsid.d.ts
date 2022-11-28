import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetPaymentsIdRequest extends SpeakeasyBase {
    pathParams: GetPaymentsIdPathParams;
}
export declare class GetPaymentsIdResponse extends SpeakeasyBase {
    accountLineItemEntity?: shared.AccountLineItemEntity;
    contentType: string;
    statusCode: number;
}
