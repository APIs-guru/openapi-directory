import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SalesEntryDto } from "./salesentrydto";


export class BatchItemSalesEntryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: SalesEntryDto;

  @Metadata({ data: "json, name=opCode" })
  opCode?: number;
}
