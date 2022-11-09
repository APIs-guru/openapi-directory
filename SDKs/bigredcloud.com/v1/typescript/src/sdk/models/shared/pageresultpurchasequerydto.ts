import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PurchaseQueryDto } from "./purchasequerydto";


export class PageResultPurchaseQueryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.PurchaseQueryDto })
  items?: PurchaseQueryDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
