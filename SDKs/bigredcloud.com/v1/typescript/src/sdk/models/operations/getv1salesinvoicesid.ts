import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1SalesInvoicesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1SalesInvoicesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1SalesInvoicesIdPathParams;
}


export class GetV1SalesInvoicesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesInvoiceCreditNoteDto?: shared.SalesInvoiceCreditNoteDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
