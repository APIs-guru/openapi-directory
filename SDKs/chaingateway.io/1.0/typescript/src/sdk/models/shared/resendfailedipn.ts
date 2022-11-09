import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResendFailedIpn extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=ok" })
  ok: boolean;
}
