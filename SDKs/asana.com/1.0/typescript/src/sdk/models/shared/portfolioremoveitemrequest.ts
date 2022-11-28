import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PortfolioRemoveItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item: string;
}
