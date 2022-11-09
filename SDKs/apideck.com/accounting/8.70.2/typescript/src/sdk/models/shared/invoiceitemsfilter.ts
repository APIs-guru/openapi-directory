import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InvoiceItemsFilter extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=name" })
  name?: string;
}
