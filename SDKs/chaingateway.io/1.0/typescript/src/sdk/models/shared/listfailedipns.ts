import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedIpn } from "./failedipn";



export class ListFailedIpNs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failed_ipns", elemType: FailedIpn })
  failedIpns: FailedIpn[];

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;
}
