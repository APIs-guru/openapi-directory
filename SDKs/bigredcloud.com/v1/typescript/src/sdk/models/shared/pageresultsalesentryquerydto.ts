import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SalesEntryQueryDto } from "./salesentryquerydto";



export class PageResultSalesEntryQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: SalesEntryQueryDto })
  items?: SalesEntryQueryDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
