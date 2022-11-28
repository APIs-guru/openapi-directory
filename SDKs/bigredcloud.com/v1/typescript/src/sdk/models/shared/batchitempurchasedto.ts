import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PurchaseDto } from "./purchasedto";



export class BatchItemPurchaseDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: PurchaseDto;

  @SpeakeasyMetadata({ data: "json, name=opCode" })
  opCode?: number;
}
