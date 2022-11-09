import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExchangeRateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency: string;
}
