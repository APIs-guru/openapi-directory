import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SalesCreditNotesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultSalesCreditNoteQueryDto?: shared.PageResultSalesCreditNoteQueryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
