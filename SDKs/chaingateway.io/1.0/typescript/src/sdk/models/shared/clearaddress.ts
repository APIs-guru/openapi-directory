import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClearAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @Metadata({ data: "json, name=gas" })
  gas: number;

  @Metadata({ data: "json, name=newaddress" })
  newaddress: string;

  @Metadata({ data: "json, name=ok" })
  ok: boolean;

  @Metadata({ data: "json, name=total" })
  total: string;

  @Metadata({ data: "json, name=txid" })
  txid: string;
}
