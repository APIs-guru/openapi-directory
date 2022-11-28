import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTokenBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractaddress" })
  contractaddress: string;

  @SpeakeasyMetadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;
}
