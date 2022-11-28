import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductDto } from "./productdto";



export class PageResultProductDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: ProductDto })
  items?: ProductDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
