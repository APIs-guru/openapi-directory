import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExchangeRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate: number;
}
