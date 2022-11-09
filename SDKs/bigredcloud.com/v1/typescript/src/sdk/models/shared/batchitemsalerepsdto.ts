import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SaleRepsDto } from "./salerepsdto";


export class BatchItemSaleRepsDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: SaleRepsDto;

  @Metadata({ data: "json, name=opCode" })
  opCode?: number;
}
