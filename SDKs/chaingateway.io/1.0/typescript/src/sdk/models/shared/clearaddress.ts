import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClearAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @SpeakeasyMetadata({ data: "json, name=gas" })
  gas: number;

  @SpeakeasyMetadata({ data: "json, name=newaddress" })
  newaddress: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: string;

  @SpeakeasyMetadata({ data: "json, name=txid" })
  txid: string;
}
