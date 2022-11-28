import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaxCreateApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Percentage, form, name=Percentage;" })
  percentage?: number;
}
