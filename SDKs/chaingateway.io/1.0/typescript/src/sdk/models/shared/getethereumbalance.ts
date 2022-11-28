import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEthereumBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: number;

  @SpeakeasyMetadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;
}
