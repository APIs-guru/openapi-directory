import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FailedIpn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=contractaddress" })
  contractaddress: string;

  @SpeakeasyMetadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
