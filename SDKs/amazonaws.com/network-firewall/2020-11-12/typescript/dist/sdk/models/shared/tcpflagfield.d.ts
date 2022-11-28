import { SpeakeasyBase } from "../../../internal/utils";
import { TcpFlagEnum } from "./tcpflagenum";
/**
 * TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings.
**/
export declare class TcpFlagField extends SpeakeasyBase {
    flags: TcpFlagEnum[];
    masks?: TcpFlagEnum[];
}
