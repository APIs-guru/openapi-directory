import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FailedIpn extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: string;

  @Metadata({ data: "json, name=amount" })
  amount: string;

  @Metadata({ data: "json, name=contractaddress" })
  contractaddress: string;

  @Metadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
