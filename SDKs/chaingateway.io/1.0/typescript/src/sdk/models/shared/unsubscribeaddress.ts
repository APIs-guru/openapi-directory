import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnsubscribeAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractaddress" })
  contractaddress: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
