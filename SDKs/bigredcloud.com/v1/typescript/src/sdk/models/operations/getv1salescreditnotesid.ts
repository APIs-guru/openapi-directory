import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1SalesCreditNotesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1SalesCreditNotesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1SalesCreditNotesIdPathParams;
}


export class GetV1SalesCreditNotesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesInvoiceCreditNoteDto?: shared.SalesInvoiceCreditNoteDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
