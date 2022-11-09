import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1SalesInvoicesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1SalesInvoicesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1SalesInvoicesIdPathParams;
}


export class GetV1SalesInvoicesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesInvoiceCreditNoteDto?: shared.SalesInvoiceCreditNoteDto;

  @Metadata()
  statusCode: number;
}
