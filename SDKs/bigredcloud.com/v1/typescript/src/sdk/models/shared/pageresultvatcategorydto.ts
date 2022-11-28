import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VatCategoryDto } from "./vatcategorydto";



export class PageResultVatCategoryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: VatCategoryDto })
  items?: VatCategoryDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
