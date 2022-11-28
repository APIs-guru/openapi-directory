import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExchangeRateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;
}
