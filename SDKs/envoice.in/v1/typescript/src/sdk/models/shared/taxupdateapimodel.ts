import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaxUpdateApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Percentage, form, name=Percentage;" })
  percentage?: number;
}
