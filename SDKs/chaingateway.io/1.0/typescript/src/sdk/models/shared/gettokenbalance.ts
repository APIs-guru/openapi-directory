import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTokenBalance extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance" })
  balance: number;

  @Metadata({ data: "json, name=contractaddress" })
  contractaddress: string;

  @Metadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @Metadata({ data: "json, name=ok" })
  ok: boolean;
}
