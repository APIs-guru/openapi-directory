import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1SalesCreditNotesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1SalesCreditNotesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1SalesCreditNotesIdPathParams;
}


export class GetV1SalesCreditNotesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesInvoiceCreditNoteDto?: shared.SalesInvoiceCreditNoteDto;

  @Metadata()
  statusCode: number;
}
