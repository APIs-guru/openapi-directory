import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PurchaseDto } from "./purchasedto";


export class BatchItemPurchaseDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: PurchaseDto;

  @Metadata({ data: "json, name=opCode" })
  opCode?: number;
}
