import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResendFailedIpn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;
}
