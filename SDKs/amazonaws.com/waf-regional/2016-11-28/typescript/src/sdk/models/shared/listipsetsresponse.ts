import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpSetSummary } from "./ipsetsummary";



export class ListIpSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IPSets", elemType: IpSetSummary })
  ipSets?: IpSetSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
