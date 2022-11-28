import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTokenBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: number;

  @SpeakeasyMetadata({ data: "json, name=contractaddress" })
  contractaddress: string;

  @SpeakeasyMetadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;
}
