import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SalesCreditNotesPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesCreditNotesPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SalesCreditNotesPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SalesInvoiceCreditNoteDto;
}


export class SalesCreditNotesPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesCreditNotesPut200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
