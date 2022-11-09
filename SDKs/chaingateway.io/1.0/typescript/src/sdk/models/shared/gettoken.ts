import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=contractaddress" })
  contractaddress: string;

  @Metadata({ data: "json, name=decimals" })
  decimals: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=ok" })
  ok: boolean;

  @Metadata({ data: "json, name=supply" })
  supply: number;

  @Metadata({ data: "json, name=symbol" })
  symbol: string;
}
