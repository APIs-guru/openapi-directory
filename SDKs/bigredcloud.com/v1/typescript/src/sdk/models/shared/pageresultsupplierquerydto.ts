import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupplierQueryDto } from "./supplierquerydto";



export class PageResultSupplierQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: SupplierQueryDto })
  items?: SupplierQueryDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
