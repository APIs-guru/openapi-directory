import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Currency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code, form, name=Code;" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Symbol, form, name=Symbol;" })
  symbol?: string;

  @SpeakeasyMetadata({ data: "json, name=Value, form, name=Value;" })
  value?: string;
}
