import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoicesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetInvoicesIdRequest extends SpeakeasyBase {
    pathParams: GetInvoicesIdPathParams;
}
export declare class GetInvoicesIdResponse extends SpeakeasyBase {
    accountLineItemEntity?: shared.AccountLineItemEntity;
    contentType: string;
    statusCode: number;
}
