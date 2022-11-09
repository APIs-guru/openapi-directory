import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendEthereum extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: string;

  @Metadata({ data: "json, name=from" })
  from: string;

  @Metadata({ data: "json, name=ok" })
  ok: boolean;

  @Metadata({ data: "json, name=to" })
  to: string;

  @Metadata({ data: "json, name=txid" })
  txid: string;
}
