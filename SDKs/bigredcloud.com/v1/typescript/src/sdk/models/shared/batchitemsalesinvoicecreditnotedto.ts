import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SalesInvoiceCreditNoteDto } from "./salesinvoicecreditnotedto";



export class BatchItemSalesInvoiceCreditNoteDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: SalesInvoiceCreditNoteDto;

  @SpeakeasyMetadata({ data: "json, name=opCode" })
  opCode?: number;
}
