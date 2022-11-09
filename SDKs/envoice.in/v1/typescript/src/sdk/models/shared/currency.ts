import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Currency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code, form, name=Code;" })
  code?: string;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @Metadata({ data: "json, name=Symbol, form, name=Symbol;" })
  symbol?: string;

  @Metadata({ data: "json, name=Value, form, name=Value;" })
  value?: string;
}
