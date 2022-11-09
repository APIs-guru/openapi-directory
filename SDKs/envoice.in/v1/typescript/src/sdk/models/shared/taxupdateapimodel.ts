import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaxUpdateApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @Metadata({ data: "json, name=Percentage, form, name=Percentage;" })
  percentage?: number;
}
