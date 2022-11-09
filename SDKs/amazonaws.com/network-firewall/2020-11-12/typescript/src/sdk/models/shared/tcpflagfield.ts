import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TcpFlagEnum } from "./tcpflagenum";
import { TcpFlagEnum } from "./tcpflagenum";


// TcpFlagField
/** 
 * TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings.
**/
export class TcpFlagField extends SpeakeasyBase {
  @Metadata({ data: "json, name=Flags" })
  flags: TcpFlagEnum[];

  @Metadata({ data: "json, name=Masks" })
  masks?: TcpFlagEnum[];
}
