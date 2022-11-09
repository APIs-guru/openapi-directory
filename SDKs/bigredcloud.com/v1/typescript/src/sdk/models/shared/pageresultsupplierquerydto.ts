import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SupplierQueryDto } from "./supplierquerydto";


export class PageResultSupplierQueryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.SupplierQueryDto })
  items?: SupplierQueryDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
