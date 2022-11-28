import { SpeakeasyBase } from "../../../internal/utils";
import { IpSetSummary } from "./ipsetsummary";
export declare class ListIpSetsResponse extends SpeakeasyBase {
    ipSets?: IpSetSummary[];
    nextMarker?: string;
}
