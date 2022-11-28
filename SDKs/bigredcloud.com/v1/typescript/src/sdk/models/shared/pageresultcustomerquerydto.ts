import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerQueryDto } from "./customerquerydto";



export class PageResultCustomerQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: CustomerQueryDto })
  items?: CustomerQueryDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
