import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductDto } from "./productdto";


export class PageResultProductDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.ProductDto })
  items?: ProductDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
