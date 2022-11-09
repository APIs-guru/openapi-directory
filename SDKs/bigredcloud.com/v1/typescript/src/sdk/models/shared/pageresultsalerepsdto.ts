import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SaleRepsDto } from "./salerepsdto";


export class PageResultSaleRepsDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.SaleRepsDto })
  items?: SaleRepsDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
