import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SaleRepsDto } from "./salerepsdto";



export class PageResultSaleRepsDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: SaleRepsDto })
  items?: SaleRepsDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
