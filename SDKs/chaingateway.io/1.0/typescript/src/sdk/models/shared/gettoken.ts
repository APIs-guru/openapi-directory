import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractaddress" })
  contractaddress: string;

  @SpeakeasyMetadata({ data: "json, name=decimals" })
  decimals: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;

  @SpeakeasyMetadata({ data: "json, name=supply" })
  supply: number;

  @SpeakeasyMetadata({ data: "json, name=symbol" })
  symbol: string;
}
