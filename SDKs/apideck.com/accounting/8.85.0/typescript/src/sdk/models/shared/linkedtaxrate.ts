import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LinkedTaxRateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class LinkedTaxRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
