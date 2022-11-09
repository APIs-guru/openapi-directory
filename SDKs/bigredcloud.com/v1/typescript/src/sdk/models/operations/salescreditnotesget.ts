import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesCreditNotesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultSalesCreditNoteQueryDto?: shared.PageResultSalesCreditNoteQueryDto;

  @Metadata()
  statusCode: number;
}
