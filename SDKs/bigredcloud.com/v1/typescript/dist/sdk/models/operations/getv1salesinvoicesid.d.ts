import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1SalesInvoicesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV1SalesInvoicesIdRequest extends SpeakeasyBase {
    pathParams: GetV1SalesInvoicesIdPathParams;
}
export declare class GetV1SalesInvoicesIdResponse extends SpeakeasyBase {
    contentType: string;
    salesInvoiceCreditNoteDto?: shared.SalesInvoiceCreditNoteDto;
    statusCode: number;
}
