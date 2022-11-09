import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PortfolioRemoveItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item: string;
}
