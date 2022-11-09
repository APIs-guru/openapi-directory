import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedIpn } from "./failedipn";


export class ListFailedIpNs extends SpeakeasyBase {
  @Metadata({ data: "json, name=failed_ipns", elemType: shared.FailedIpn })
  failedIpns: FailedIpn[];

  @Metadata({ data: "json, name=ok" })
  ok: boolean;
}
