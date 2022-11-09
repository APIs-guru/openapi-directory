import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaxRatesFilter extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=assets" })
  assets?: boolean;

  @Metadata({ data: "queryParam, name=equity" })
  equity?: boolean;

  @Metadata({ data: "queryParam, name=expenses" })
  expenses?: boolean;

  @Metadata({ data: "queryParam, name=liabilities" })
  liabilities?: boolean;

  @Metadata({ data: "queryParam, name=revenue" })
  revenue?: boolean;
}
