import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IpSetSummary } from "./ipsetsummary";
export declare class ListIpSetsResponse extends SpeakeasyBase {
    ipSets?: IpSetSummary[];
    nextMarker?: string;
}
