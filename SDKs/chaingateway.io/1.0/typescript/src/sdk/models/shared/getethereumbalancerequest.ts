import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEthereumBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;
}
