import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExchangeRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=ok" })
  ok: boolean;

  @Metadata({ data: "json, name=rate" })
  rate: number;
}
