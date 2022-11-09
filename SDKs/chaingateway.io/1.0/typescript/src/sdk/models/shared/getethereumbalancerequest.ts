import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEthereumBalanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;
}
