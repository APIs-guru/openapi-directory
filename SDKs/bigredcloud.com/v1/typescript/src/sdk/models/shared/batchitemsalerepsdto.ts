import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SaleRepsDto } from "./salerepsdto";



export class BatchItemSaleRepsDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: SaleRepsDto;

  @SpeakeasyMetadata({ data: "json, name=opCode" })
  opCode?: number;
}
