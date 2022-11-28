import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SalesEntryDto } from "./salesentrydto";



export class BatchItemSalesEntryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: SalesEntryDto;

  @SpeakeasyMetadata({ data: "json, name=opCode" })
  opCode?: number;
}
