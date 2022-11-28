import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SalesCreditNoteQueryDto } from "./salescreditnotequerydto";



export class PageResultSalesCreditNoteQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: SalesCreditNoteQueryDto })
  items?: SalesCreditNoteQueryDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
