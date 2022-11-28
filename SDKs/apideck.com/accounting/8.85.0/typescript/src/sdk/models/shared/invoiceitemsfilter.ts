import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvoiceItemsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=name" })
  name?: string;
}
