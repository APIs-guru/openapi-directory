import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SalesInvoiceCreditNoteDto } from "./salesinvoicecreditnotedto";


export class BatchItemSalesInvoiceCreditNoteDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: SalesInvoiceCreditNoteDto;

  @Metadata({ data: "json, name=opCode" })
  opCode?: number;
}
