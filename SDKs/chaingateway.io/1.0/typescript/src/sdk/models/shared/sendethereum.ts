import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendEthereum extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "json, name=txid" })
  txid: string;
}
