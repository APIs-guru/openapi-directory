import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VatTypeDto } from "./vattypedto";



export class PageResultVatTypeDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: VatTypeDto })
  items?: VatTypeDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
