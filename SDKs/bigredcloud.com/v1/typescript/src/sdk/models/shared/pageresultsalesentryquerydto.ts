import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SalesEntryQueryDto } from "./salesentryquerydto";


export class PageResultSalesEntryQueryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.SalesEntryQueryDto })
  items?: SalesEntryQueryDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
