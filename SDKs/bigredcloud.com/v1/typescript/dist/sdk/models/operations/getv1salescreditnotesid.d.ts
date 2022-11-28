import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1SalesCreditNotesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV1SalesCreditNotesIdRequest extends SpeakeasyBase {
    pathParams: GetV1SalesCreditNotesIdPathParams;
}
export declare class GetV1SalesCreditNotesIdResponse extends SpeakeasyBase {
    contentType: string;
    salesInvoiceCreditNoteDto?: shared.SalesInvoiceCreditNoteDto;
    statusCode: number;
}
