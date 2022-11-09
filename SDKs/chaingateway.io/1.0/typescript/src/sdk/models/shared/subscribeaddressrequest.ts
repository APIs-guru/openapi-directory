import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscribeAddressRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contractaddress" })
  contractaddress: string;

  @Metadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
