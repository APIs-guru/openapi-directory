import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaxRatesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=assets" })
  assets?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, name=equity" })
  equity?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, name=expenses" })
  expenses?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, name=liabilities" })
  liabilities?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, name=revenue" })
  revenue?: boolean;
}
