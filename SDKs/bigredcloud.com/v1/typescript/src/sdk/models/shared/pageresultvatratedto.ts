import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VatRateDto } from "./vatratedto";



export class PageResultVatRateDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: VatRateDto })
  items?: VatRateDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
