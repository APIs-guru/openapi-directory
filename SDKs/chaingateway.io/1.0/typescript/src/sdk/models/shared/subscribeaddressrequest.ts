import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubscribeAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractaddress" })
  contractaddress: string;

  @SpeakeasyMetadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
