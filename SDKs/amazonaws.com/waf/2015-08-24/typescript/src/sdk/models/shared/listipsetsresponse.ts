import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpSetSummary } from "./ipsetsummary";


export class ListIpSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IPSets", elemType: shared.IpSetSummary })
  ipSets?: IpSetSummary[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
