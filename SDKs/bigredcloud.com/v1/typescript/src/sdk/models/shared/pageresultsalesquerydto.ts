import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SalesQueryDto } from "./salesquerydto";



export class PageResultSalesQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: SalesQueryDto })
  items?: SalesQueryDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
