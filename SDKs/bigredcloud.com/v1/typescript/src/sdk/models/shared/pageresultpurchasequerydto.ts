import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PurchaseQueryDto } from "./purchasequerydto";



export class PageResultPurchaseQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: PurchaseQueryDto })
  items?: PurchaseQueryDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
