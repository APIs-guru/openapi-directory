import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VatCategoryDto } from "./vatcategorydto";


export class PageResultVatCategoryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.VatCategoryDto })
  items?: VatCategoryDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
